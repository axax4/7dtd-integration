import React, { useState } from 'react'
import './App.css'
import './post.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import json from './commands.json'

function App() {
  const [text, setText] = useState('aaa')
  const [copied, setCopied] = useState(false)
  return (
    <div className="App p-5">
      <h1 className="text-3xl p-10 text-center">7 Days to Die Twitchインテグレーション コマンド支援ツール</h1>

      <div className="p-8">
        <p>下記ボタンをクリックすることで、そのコマンドをクリップボードにコピーします。</p>
      </div>

      {json.map((cat) => (
        <div className="py-4">
          <h2 className="font-bold">{cat.name}</h2>

          {cat.commands.map((cmdSet) => {
            const cmd = cmdSet[0] as string
            const desc = cmdSet[1] as string
            const points = cmdSet[2] as number

            return (
              <>
                <CopyToClipboard
                  text={cmd}
                  onCopy={() => {
                    setText(cmd)
                    setCopied(true)
                    setTimeout(() => {
                      setCopied(false)
                    }, 2000)
                  }}
                >
                  <button
                    key={cmd}
                    className={(cat.type === 'バフ' ? 'bg-blue-400' : 'bg-red-400') + ' border p-3 rounded '}
                    title={desc}
                  >
                    <h2>{cmd}</h2>
                    <p>{points > -1 && '(' + points + ')'}</p>
                    {/* <p>{desc }</p> */}
                  </button>
                </CopyToClipboard>
              </>
            )
          })}
        </div>
      ))}

      <div className="p-5 text-center">
        {copied ? <h1 className="text-3xl">「{text}」をクリップボードにコピーしました！</h1> : null}
      </div>
    </div>
  )
}

export default App