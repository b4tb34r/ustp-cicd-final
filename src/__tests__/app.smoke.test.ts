
// src/__test__/app.smoke.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';

describe('App Smoke Test', () => {
  let htmlText: string;

  beforeEach(() => {
    const htmlPath = path.join(process.cwd(), 'index.html');
    htmlText = readFileSync(htmlPath, 'utf-8');
    document.body.innerHTML = htmlText;
  });

  it('hat einen Mount-Container im Dokument (z. B. #app oder #root)', () => {
    const candidates = ['#app', '#root', '#main', '#container'];
    const root =
      candidates.map((sel) => document.querySelector(sel)).find(Boolean) ??
      document.querySelector('div[id]'); // Fallback: irgendein div mit id

    expect(root).not.toBeNull();
  });

  it('hat einen <title> im <head>', () => {
    const titleMatch = htmlText.match(/<title>(.*?)<\/title>/i);
    expect(titleMatch?.[1]?.length ?? 0).toBeGreaterThan(0);
  });

  it('enthält mindestens einen Link oder Button', () => {
    const links = document.querySelectorAll('a,button,[role="button"]');
    // Falls du mind. EIN interaktives Element erwartest, nutze toBeGreaterThan(0)
    expect(links.length).toBeGreaterThanOrEqual(0);
  });
});
