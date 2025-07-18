export interface UnDislikeButtonProps {
  onClick?: (e: MouseEvent) => void;
  maskSize: string;
}

export const UnDislikeButton = (props: UnDislikeButtonProps) => (
  <div class="style-scope">
    <button
      id="allundislike"
      data-type="dislike"
      data-filled="true"
      class="like-menu yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-button"
      aria-pressed="false"
      aria-label="Undislike all"
      onClick={props.onClick}
    >
      <div
        class="yt-spec-button-shape-next__icon"
        style={{
          color: 'var(--ytmusic-setting-item-toggle-active)',
        }}
        aria-hidden="true"
      >
        <div
          class="yt-spec-button-shape-next__icon"
          style={{
            'color': 'white',
            'mask': 'linear-gradient(grey, grey)',
            '-webkit-mask': 'linear-gradient(grey, grey)',
            '-webkit-mask-size': props.maskSize,
            '-webkit-mask-repeat': 'no-repeat',
            'z-index': 1,
            'position': 'absolute',
          }}
          aria-hidden="true"
        >
          <div
            style={{
              width: '24px',
              height: '24px',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              class="style-scope yt-icon"
              style={{
                'pointer-events': 'none',
                'display': 'block',
                'width': '100%',
                'height': '100%',
              }}
            >
              <g class="style-scope yt-icon">
                <path
                  d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div
          style={{
            width: '24px',
            height: '24px',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            class="style-scope yt-icon"
            style={{
              'pointer-events': 'none',
              'display': 'block',
              'width': '100%',
              'height': '100%',
            }}
          >
            <g class="style-scope yt-icon">
              <path
                d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <yt-touch-feedback-shape
        style={{
          'border-radius': 'inherit',
        }}
      >
        <div
          class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response"
          aria-hidden="true"
        >
          <div class="yt-spec-touch-feedback-shape__stroke"></div>
          <div class="yt-spec-touch-feedback-shape__fill"></div>
        </div>
      </yt-touch-feedback-shape>
    </button>
  </div>
);
