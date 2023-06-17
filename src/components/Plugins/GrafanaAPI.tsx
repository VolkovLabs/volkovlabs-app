import React from 'react';
import { Card, LinkButton, TagList } from '@grafana/ui';

/**
 * Grafana HTTP API
 */
export const GrafanaAPI: React.FC = () => {
  return (
    <Card>
      <Card.Heading>Grafana HTTP API Data Source</Card.Heading>
      <Card.Description>Allows retrieving data from local and remote Grafana instances via HTTP API.</Card.Description>
      <Card.Figure>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://volkovlabs.io/plugins/volkovlabs-grapi-datasource/"
          title="Static Data Source"
        >
          <svg width={40} height={40} viewBox="0 0 108 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.6201 77.0645C30.062 77.6315 31.362 77.6522 34.0267 77.3331C32.0305 86.9166 44.6474 88.3493 30.244 105C35.1633 86.3227 24.2738 90.8959 27.6201 77.0645ZM18.2828 72.3412L24.2533 75.5282C20.5411 79.9076 23.1464 94.391 15.4472 101.764C15.15 90.1201 14.3311 80.5124 18.2828 72.3412ZM79.1104 99.2382L79.4667 91.3185C76.6309 82.9386 72.6718 75.3892 68.2708 68.1645C70.9592 67.0472 73.2659 65.3828 74.8352 62.6883C82.3226 65.0623 89.9865 67.049 98.6442 66.6977C100.65 81.3632 92.2803 92.0922 79.1104 99.2382ZM38.2959 81.7406L43.2028 80.1797C49.3568 75.9187 54.3134 71.7872 58.0385 66.6264C59.9103 67.7344 61.8937 68.7786 64.1663 69.588C68.3226 77.594 71.5543 85.2469 73.4295 93.4707C63.9141 100.663 46.0439 99.7414 38.2959 81.7406ZM10.9161 66.3823L15.8075 71.7909C13.5642 74.9272 11.137 80.7715 8.7619 90.6236C5.50057 81.506 6.24927 73.3665 10.9161 66.3823ZM4.37545 60.1829L8.13968 65.0245C6.06728 67.5073 3.66822 72.2396 1.06804 80.3377C-1.09696 72.4971 0.0412888 65.7248 4.37545 60.1829ZM53.5776 46.6743C52.9741 48.9411 52.7124 51.1723 53.1805 53.2774L55.3943 62.9285C51.5126 67.7906 46.668 72.2322 40.0978 76.1368C36.5617 63.3926 43.6983 53.3468 53.5776 46.6743ZM10.8792 62.0402C4.12711 55.8466 3.73548 52.038 7.3062 49.7393C7.41954 34.3038 14.1125 24.2639 24.2072 17.3209L23.2212 27.419C24.0847 37.6017 28.7328 46.1126 36.4951 58.4608C34.3504 63.4357 33.2176 69.0004 34.5992 74.067C25.806 71.5938 15.9342 67.2461 10.8792 62.0402ZM65.4744 63.0037L68.1171 52.0494C75.7216 55.5104 72.223 61.0149 65.4744 63.0037ZM107.813 62.9492L100.168 60.2467C91.7924 60.7446 83.9278 59.6233 76.2584 57.8222C76.6576 54.4455 75.8944 51.0183 74.5997 47.9196C78.0599 41.7854 86.1451 32.8333 92.7655 27.4377C104.157 38.9162 109.05 50.7704 107.813 62.9492ZM61.8979 62.6827L59.8591 61.6909C58.546 57.9222 57.5338 53.9295 56.9933 49.5858C59.8402 48.2126 62.3563 47.9161 64.4918 48.8456L61.8979 62.6827ZM28.0694 24.2304C36.0065 9.25873 47.1451 2.37957 59.2475 0L54.5657 9.91221C53.2323 19.6122 52.614 29.7741 54.8797 41.7822C49.678 44.1352 44.0159 46.9937 39.2229 54.3086C33.3024 45.4142 28.5688 35.41 28.0694 24.2304ZM59.6207 41.9268C57.4888 32.3284 58.1647 22.4255 59.4755 10.2859C74.9301 7.73207 88.2896 11.0864 98.0393 20.3356C94.8505 21.0361 91.9794 22.1742 89.2477 23.5133C82.2169 30.0393 76.5199 37.5531 71.4593 45.5216C67.9439 43.4989 63.9327 42.4154 59.6207 41.9268Z"
              fill="#FF4040"
            />
          </svg>
        </a>
      </Card.Figure>
      <Card.Tags>
        <TagList tags={['Data Source']} />
      </Card.Tags>
      <Card.Actions>
        <LinkButton
          variant="primary"
          icon="book-open"
          target="_blank"
          href="https://volkovlabs.io/plugins/volkovlabs-grapi-datasource/"
        >
          Documentation
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="star"
          target="_blank"
          href="https://github.com/volkovlabs/volkovlabs-grapi-datasource"
        >
          GitHub
        </LinkButton>
        <LinkButton
          variant="success"
          icon="cloud-download"
          target="_blank"
          href="https://grafana.com/grafana/plugins/volkovlabs-grapi-datasource/"
        >
          Grafana
        </LinkButton>
      </Card.Actions>
    </Card>
  );
};
