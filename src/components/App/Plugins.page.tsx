import { PluginPage, PluginPageProps } from '@grafana/runtime';
import React from 'react';

import { TEST_IDS } from '../../constants';
import {
  Base64Image,
  BusinessCharts,
  Calendar,
  DataManipulation,
  DynamicText,
  Environment,
  GrafanaApi,
  RssAtom,
  Static,
  Variable,
} from '../Plugins';

/**
 * Properties
 */
interface Props extends PluginPageProps {}

/**
 * Plugins
 */
export const PluginsPage: React.FC<Props> = () => {
  return (
    <PluginPage>
      <div data-testid={TEST_IDS.plugins.root}>
        <BusinessCharts />
        <Base64Image />
        <Calendar />
        <DataManipulation />
        <DynamicText />
        <Environment />
        <GrafanaApi />
        <RssAtom />
        <Static />
        <Variable />
      </div>
    </PluginPage>
  );
};
