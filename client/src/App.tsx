import React, { useState } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'
import './App.css'

function App() {
  const [url, setUrl] = useState<string>('')
  const [shortenUrl, setShortenUrl] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [disableButton, setDisableButton] = useState<boolean>(false)
  const [copiedText, setCopiedText] = useState<string>('')

  const validateUrl = (text: string): boolean => {
    let url
    try {
      url = new URL(text)
    } catch (_) {
      return false
    }
    return url.protocol === 'http:' || url.protocol === 'https:'
  }

  const handleShorten = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (url.trim() && validateUrl(url)) {
      setError('')
      setShortenUrl('')
      setLoading(true)
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/`, { url })
        .then((response: AxiosResponse) => {
          if (response?.data?.success) {
            setShortenUrl(response?.data?.data?.url)
            setDisableButton(true)
          }
          setLoading(false)
        })
        .catch((error: AxiosError) => {
          setLoading(false)
          setError(error?.response?.data?.error?.message)
        })
    } else {
      setError('Please enter a valid URL!')
    }
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUrl(e.target.value)
    setShortenUrl('')
    setDisableButton(false)
    setCopiedText('')
  }

  const handleCopy = (): void => {
    navigator.clipboard.writeText(shortenUrl).then(() => {
      setCopiedText(shortenUrl)
    })
  }

  return (
    <div>
      <div className="content-wrapper">
        <h1 className="page-title">Free URL Shortener</h1>
        <p className="page-description">
          Simple open-source URL shortener application built with NodeJs,
          MongoDB, ReactJs, TypeScript, and Docker.
        </p>
        <div className="form-wrapper">
          <div className="input-wrapper">
            <input
              onChange={handleChangeInput}
              value={url}
              placeholder="https://..."
            />
            {error && <p className="error">{error}</p>}
          </div>
          <button disabled={loading || disableButton} onClick={handleShorten}>
            {loading ? 'Load...' : 'Shorten'}
          </button>
        </div>
        {shortenUrl && (
          <>
            <h3 className="result-title">Shorten URL:</h3>
            <div className="result-link-wrapper">
              <a
                target="_blank"
                rel="noreferrer"
                className="shorten-url"
                href={shortenUrl}
              >
                {shortenUrl}
              </a>
              <button onClick={handleCopy} className="copy-button">
                {copiedText === shortenUrl ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </>
        )}
      </div>
      <a
        className="github"
        href="https://github.com/soroushchehresa/url-shortener"
        target="_blank"
        rel="noreferrer"
      >
        Made with 🖤 love on GitHub
      </a>
    </div>
  )
}

export default App
