import * as React from 'react';
import { Button } from '@uifabric/experiments';
import { IStackProps, Spinner, Stack } from 'office-ui-fabric-react';

const stackProps: IStackProps = { tokens: { childrenGap: 16 }, padding: 8, maxWidth: 400 };

// tslint:disable:jsx-no-lambda
export class SlotsIconExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Stack {...stackProps}>
        <Button icon="share" content="Icon: String" />
        <Button icon={{ iconName: 'share' }} content="Icon: Props, iconName: 'share'" />
        <Button
          icon={render =>
            render((IconType, iconProps) => (
              <b>
                Icon: <IconType {...iconProps} iconName="upload" />
              </b>
            ))
          }
          content="Icon: Function, Text + Icon"
        />
        <Button icon={() => <Spinner />} content="Icon: Function, Spinner" />
      </Stack>
    );
  }
}
