import React, { useState } from 'react'
import './App.css'
import './post.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import json from './commands.json'

const TYPE_COLOR: any = {
  バフ: 'bg-blue-400',
  デバフ: 'bg-red-400',
}

function App() {
  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)
  const [timeId, setTimeId] = useState<number | undefined>(undefined)
  return (
    <div className="App p-5">
      <h1 className="text-3xl p-10 text-center">7 Days to Die Twitchインテグレーション コマンド支援ツール</h1>

      <div className="p-8">
        <p>下記ボタンをクリックすることで、そのコマンドをクリップボードにコピーします。</p>
        <p>カッコ内の数字は消費ポイントです。</p>
      </div>

      {json.map((cat, indexCat) => (
        <div className="py-4" key={indexCat}>
          <h2 className="font-bold">
            {cat.name}
          </h2>

          {cat.commands.map((cmdSet, cmdIndex) => {
            const cmd = cmdSet[0] as string
            const desc = cmdSet[1] as string
            const points = cmdSet[2] as number

            let color: string = TYPE_COLOR[cat.type] ?? 'bg-green-400'
            return (
              <span key={cmdIndex}>
                <CopyToClipboard
                  text={cmd}
                  onCopy={() => {
                    if (timeId) clearTimeout(timeId)
                    setText(cmd)
                    setCopied(true)
                    setTimeId(
                      window.setTimeout(() => {
                        setCopied(false)
                      }, 2000)
                    )
                  }}
                >
                  <button className={color + ' border p-3 rounded '} title={desc}>
                    <h2>{cmd}</h2>
                    <p>{points > -1 && '(' + points + ')'}</p>
                    {/* <p>{desc }</p> */}
                  </button>
                </CopyToClipboard>
              </span>
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
