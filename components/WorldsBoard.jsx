"use client";

import dynamic from 'next/dynamic';
import { WORLDS, IMG } from '@/lib/data';
import { Crest } from './ui';

function WorldsBoardInner() {
  return (
    <section className="worlds">
      <div className="section-head">
        <div className="row">
          <h2>Worlds we've visited</h2>
          <span className="meta">Scenes from past picks</span>
        </div>
        <Crest subtle glyph="✧">From the shelf</Crest>
      </div>
      <div className="worlds-grid">
        {WORLDS.map((w, i) => (
          <div className="world-tile" key={i}>
            <image-slot
              id={`world-${i + 1}`}
              shape="rounded"
              radius="6"
              src={IMG.worlds[i]}
              placeholder={`Drop a scene · ${w.where.toLowerCase()}`}
            ></image-slot>
            <div className="caption">
              <span className="where">{w.where}</span>
              <span className="what">{w.what}</span>
              <span className="src">from, {w.src}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(WorldsBoardInner), { ssr: false });
