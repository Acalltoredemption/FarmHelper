import React from 'react'
import Selections from '../components/Selections'
import ResultPanel from '../components/ResultPanel'

export default function Calculator() {
  return (
    <section className="grid grid-cols-2 gap-4 mt-12">
    <Selections />
    <ResultPanel />
    </section>
  )
}
