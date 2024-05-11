import React, { useEffect, useRef } from 'react';
import TwitterGlowing from '../assets/TwitterGlowing.svg';
import YoutubeGlowing from '../assets/YoutubeGlowing.svg';
import DiscordGlowing from '../assets/DiscordGlowing.svg';

export default function Follow() {
  const youtubeRef = useRef();
  const discordRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          youtubeRef.current.classList.remove('invisible');
          youtubeRef.current.classList.add('animateFromCenterToLeft');
          discordRef.current.classList.remove('invisible');
          discordRef.current.classList.add('animateFromCenterToRight');
          // Once the animation classes are added, stop observing
          observer.unobserve(youtubeRef.current);
          observer.unobserve(discordRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    observer.observe(youtubeRef.current);
    observer.observe(discordRef.current);

    return () => {
      observer.unobserve(youtubeRef.current);
      observer.unobserve(discordRef.current);
    };
  }, []);

  return (
    <div className="follow">
      <div className="container">
        <h1 className="mb-5">
          follow <span>juicy socials</span>
        </h1>
        <div className="box_container row align-items-center gap-3 gap-md-5 gap-sm-5 w-full">
          <div ref={youtubeRef} className="bx col-lg col-md col-12-sm invisible">
            <img src={YoutubeGlowing} alt="social_media" />
            <h3>Youtube</h3>
            <p>Subscribe on channel</p>
            <button className="btn_">Subscribe</button>
          </div>
          <div className="bx col-lg col-md col-12-sm">
            <img src={TwitterGlowing} alt="social_media" />
            <h3>X/Twitter</h3>
            <p>Stay in touch</p>
            <button className="btn_">Follow</button>
          </div>
          <div ref={discordRef} className="bx col-lg col-md-12 col-12-sm invisible">
            <img src={DiscordGlowing} alt="social_media" />
            <h3>Discord</h3>
            <p>Join the community</p>
            <button className="btn_">join</button>
          </div>
        </div>
      </div>
    </div>
  );
}