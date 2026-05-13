'use client'

import { useEffect } from 'react'
import { Spotlight } from '@/components/ui/spotlight'

export function SplineHero() {
  useEffect(() => {
    if (!customElements.get('spline-viewer')) {
      const s = document.createElement('script')
      s.type = 'module'
      s.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js'
      document.head.appendChild(s)
    }
  }, [])

  return (
    <div style={{
      width: '100%',
      height: '520px',
      background: 'rgba(5,5,10,0.97)',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'stretch',
    }}>
      {/* Left — text content (Spotlight clipped inside here) */}
      <div style={{
        flex: '0 0 45%',
        padding: '3rem',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
      }}>
        <Spotlight className="-top-40 left-0 md:-top-20" fill="white" />
        <span style={{ color: '#22C55E', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
          ⚡ AI-Powered Auditing
        </span>
        <h2 style={{
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          background: 'linear-gradient(to bottom, #f5f5f5, #999)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Audit Reports,<br />Accelerated
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.92rem', lineHeight: 1.65, maxWidth: '320px', margin: 0 }}>
          Upload your workbook and our AI drafts all 60+ SEDA-compliant sections — reviewed and exported in under 30 minutes.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
          <a
            href="https://audits.atechsustainability.com"
            style={{ padding: '0.6rem 1.2rem', background: '#22C55E', color: '#fff', fontWeight: 600, borderRadius: '8px', fontSize: '0.875rem', textDecoration: 'none' }}
          >
            Try Atech.AI →
          </a>
          <a
            href="https://review.atechsustainability.com"
            style={{ padding: '0.6rem 1.2rem', border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.8)', fontWeight: 600, borderRadius: '8px', fontSize: '0.875rem', textDecoration: 'none' }}
          >
            SEDA Reviewer →
          </a>
        </div>
      </div>

      {/* Right — Spline 3D scene */}
      <div style={{ flex: '0 0 55%', height: '100%', position: 'relative' }}>
        {/* @ts-ignore */}
        <spline-viewer
          url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          style={{ width: '100%', height: '100%', display: 'block' }}
        />
      </div>
    </div>
  )
}
