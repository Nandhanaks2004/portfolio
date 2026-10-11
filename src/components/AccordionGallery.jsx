'use client';

import { useRef, useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';

import './AccordionGallery.css';

const DEFAULT_ITEMS = [
  { image: 'https://picsum.photos/id/1015/900/1200', label: 'Canyon', desc: 'Sample description.', link: '#' }
];

const AccordionGallery = ({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = '#06b6d4',
  overlayColor = '#050507',
  textColor = '#ffffff',
  height = 500,
  gap = 12,
  radius = 24,
  expandRatio = 0.5,
  orientation = 'horizontal',
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  trigger = 'hover',
  showLabels = true,
  grayscale = true,
  className = ''
}) => {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const barRefs = useRef([]);
  const textRefs = useRef([]);
  const descRefs = useRef([]);
  const iconRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);

  const vertical = orientation === 'vertical';
  const count = items.length;
  const [active, setActive] = useState(defaultIndex >= 0 ? defaultIndex : -1);

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const applyLayout = useCallback(
    animate => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      const isNoneActive = active === -1;

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const text = textRefs.current[i];
        const desc = descRefs.current[i];

        const rot = isNoneActive || isActive ? 0 : i < active ? tilt : -tilt;
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };

        tl.to(panel, { flexGrow: isNoneActive ? 1 : (isActive ? grow : 1), ...rotProp, duration: dur, ease }, 0);

        if (media) {
          const drift = isNoneActive ? 0 : Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isNoneActive ? 0 : (isActive ? 0 : 1)) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive || isNoneActive ? 0 : shift,
              y: vertical ? (isActive || isNoneActive ? 0 : shift) : 0,
              '--ag-gray': gray,
              '--ag-dim': isNoneActive ? 0.25 : (isActive ? 0 : 0.6),
              duration: dur,
              ease
            },
            0
          );
        }

        if (showLabels && text) {
          if (isNoneActive) {
            tl.to([text], { opacity: 0.95, x: 0, y: 0, duration: dur, ease }, 0);
            if (desc) tl.to([desc], { opacity: 0, x: -10, y: 0, duration: dur * 0.5, ease }, 0);
          } else if (isActive) {
            const elements = [text];
            if (desc) elements.push(desc);
            tl.to(elements, { opacity: 1, x: 0, y: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
          } else {
            const elements = [text];
            if (desc) elements.push(desc);
            tl.to(elements, { opacity: 0, x: -14, y: 0, duration: dur * 0.6, ease }, 0);
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
      mediaSizeRef.current = size;
      el.style.setProperty('--ag-media-size', `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical]);

  useLayoutEffect(() => {
    if (firstRunRef.current) {
      gsap.fromTo(
        panelRefs.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0, clearProps: 'transform' }
      );
    }
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = i => {
    if (trigger === 'hover') setActive(i);
  };

  const handleClick = (i, e) => {
    if (items[i].onClick) {
      e.preventDefault();
      items[i].onClick(e);
    } else if (items[i].link) {
      // natural link behavior
    } else {
      setActive(i);
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      onMouseLeave={() => { if (defaultIndex === -1) setActive(-1); }}
      className={`accordion-gallery${vertical ? ' accordion-gallery--vertical' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-overlay': overlayColor,
        '--ag-text': textColor,
        '--ag-gap': `${gap}px`,
        '--ag-radius': `${radius}px`,
        height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`
      }}
      role="list"
      aria-label="Image accordion gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = item.link ? 'a' : 'div';
        return (
          <Tag
            key={i}
            ref={el => (panelRefs.current[i] = el)}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''} bg-white/5 backdrop-blur-xl border border-white/10 group/panel`}
            style={{ borderRadius: `${radius}px` }}
            href={item.link || undefined}
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            <span className="ag-panel__frame">
              <span className="ag-panel__media" ref={el => (mediaRefs.current[i] = el)}>
                <img src={item.image} alt={item.alt || item.label || ''} draggable="false" loading="eager" decoding="sync" />
              </span>
              <span className="ag-panel__overlay" aria-hidden="true" />
              {/* Top-right glassmorphism view button on hover */}
              <div className="absolute top-6 right-6 opacity-0 group-hover/panel:opacity-100 transition-all duration-500 z-10 pointer-events-none translate-x-4 -translate-y-4 group-hover/panel:translate-x-0 group-hover/panel:translate-y-0">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <ArrowUpRight size={24} className="text-white" />
                </div>
              </div>
            </span>
            {showLabels && (
              <span className="ag-panel__label font-sans" aria-hidden="true">
                <div className="ag-panel__header">
                  <span className="ag-panel__text font-display" ref={el => (textRefs.current[i] = el)}>
                    {item.label}
                  </span>
                </div>
                {item.desc && (
                  <span className="ag-panel__desc" ref={el => (descRefs.current[i] = el)}>
                    {item.desc}
                  </span>
                )}
              </span>
            )}
          </Tag>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
