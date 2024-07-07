import { Card, LinkButton, TagList } from '@grafana/ui';
import React from 'react';

/**
 * Business Text
 */
export const BusinessText: React.FC = () => {
  return (
    <Card>
      <Card.Heading>Business Text</Card.Heading>
      <Card.Description>Dynamic, data-driven text.</Card.Description>
      <Card.Figure>
        <a target="_blank" rel="noreferrer" href="https://volkovlabs.io/plugins/volkovlabs-dynamictext-panel/">
          <svg width={40} height={40} viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="47.5" cy="47.5" r="47.5" fill="#9D70F9" />
            <path
              d="M35.3045 76C33.6905 76 32.218 75.6063 30.8869 74.8188C29.5724 74.0313 28.5241 72.9757 27.7421 71.6521C26.9601 70.3117 26.5691 68.8289 26.5691 67.2037V61.0714C26.5524 60.619 26.3611 60.2504 25.995 59.9656C25.6456 59.664 25.2296 59.3959 24.7471 59.1614C24.2812 58.9101 23.8735 58.6168 23.5241 58.2817C23.1747 57.9467 23 57.5194 23 57C23 56.4974 23.1747 56.0785 23.5241 55.7434C23.8735 55.4083 24.2812 55.1151 24.7471 54.8638C25.2296 54.5957 25.6456 54.3192 25.995 54.0344C26.3611 53.7328 26.5524 53.381 26.5691 52.9788V46.7963C26.5691 45.1878 26.9601 43.7218 27.7421 42.3982C28.5241 41.0578 29.5724 39.9938 30.8869 39.2063C32.218 38.4021 33.6905 38 35.3045 38H38V44.1323H35.3045C34.822 44.1323 34.381 44.2496 33.9817 44.4841C33.5824 44.7187 33.2579 45.0454 33.0083 45.4643C32.7754 45.8664 32.6589 46.3104 32.6589 46.7963V53.1799C32.6256 53.7496 32.4509 54.2355 32.1348 54.6376C31.8353 55.0229 31.5025 55.3999 31.1364 55.7685C30.7704 56.1204 30.4792 56.5309 30.2629 57C30.4958 57.5194 30.787 57.955 31.1364 58.3069C31.5025 58.6587 31.8353 59.0273 32.1348 59.4127C32.4509 59.7813 32.6256 60.2504 32.6589 60.8201V67.2037C32.6589 67.7064 32.7754 68.1587 33.0083 68.5608C33.2413 68.963 33.5574 69.2813 33.9567 69.5159C34.3561 69.7504 34.8053 69.8677 35.3045 69.8677H38V76H35.3045Z"
              fill="white"
            />
            <path
              d="M59 76V69.8677H61.6955C62.178 69.8677 62.619 69.7504 63.0183 69.5159C63.4176 69.2813 63.7338 68.963 63.9667 68.5608C64.2163 68.1587 64.3411 67.7064 64.3411 67.2037V60.8201C64.3744 60.2504 64.5408 59.7813 64.8403 59.4127C65.1398 59.0273 65.4725 58.6587 65.8386 58.3069C66.2047 57.955 66.4958 57.5194 66.7121 57C66.4958 56.5309 66.2047 56.1204 65.8386 55.7685C65.4892 55.3999 65.1564 55.0229 64.8403 54.6376C64.5408 54.2355 64.3744 53.7496 64.3411 53.1799V46.7963C64.3411 46.3104 64.2163 45.8664 63.9667 45.4643C63.7338 45.0454 63.4176 44.7187 63.0183 44.4841C62.619 44.2496 62.178 44.1323 61.6955 44.1323H59V38H61.6955C63.3095 38 64.7737 38.4021 66.0882 39.2063C67.4193 39.9938 68.4759 41.0578 69.2579 42.3982C70.0399 43.7218 70.4309 45.1878 70.4309 46.7963V52.9788C70.4476 53.381 70.6306 53.7328 70.98 54.0344C71.3295 54.3192 71.7371 54.5957 72.203 54.8638C72.6855 55.1151 73.1015 55.4083 73.4509 55.7434C73.817 56.0785 74 56.4974 74 57C74 57.5194 73.817 57.9467 73.4509 58.2817C73.1015 58.6168 72.6855 58.9101 72.203 59.1614C71.7371 59.3959 71.3295 59.664 70.98 59.9656C70.6306 60.2504 70.4476 60.619 70.4309 61.0714V67.2037C70.4309 68.8289 70.0399 70.3117 69.2579 71.6521C68.4759 72.9757 67.4193 74.0313 66.0882 74.8188C64.7737 75.6063 63.3095 76 61.6955 76H59Z"
              fill="white"
            />
            <path d="M26.8242 31.7046V22.353H70.4125V31.7046H54.164V76.0001H43.0726V31.7046H26.8242Z" fill="white" />
          </svg>
        </a>
      </Card.Figure>
      <Card.Tags>
        <TagList tags={['Panel']} />
      </Card.Tags>
      <Card.Actions>
        <LinkButton
          variant="primary"
          icon="book-open"
          target="_blank"
          href="https://volkovlabs.io/plugins/volkovlabs-dynamictext-panel/"
        >
          Documentation
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="github"
          target="_blank"
          href="https://github.com/volkovlabs/volkovlabs-dynamictext-panel"
        >
          GitHub
        </LinkButton>
        <LinkButton
          variant="success"
          icon="cloud-download"
          target="_blank"
          href="https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/"
        >
          Grafana Catalog
        </LinkButton>
      </Card.Actions>
    </Card>
  );
};