import React from 'react';

import { Example } from '../../utils/example';
import Button from '../Button';

import Alert from '.';

const initial = {
  default: true,
  error: true,
  info: true,
  multi: true,
  multiTitle: true,
  success: true,
  warning: true,
};

export default class AlertExample extends React.Component {
  constructor() {
    super();
    this.state = initial;
  }
  render() {
    const onClose = id => () => this.setState({ [id]: false });
    return (
      <div>
        <Example>
          <Alert visible={this.state.default} onClose={onClose('default')}>
            Default: This is a default alert. It is just giving you some info.
          </Alert>
        </Example>
        <Example>
          <Alert
            type="info"
            visible={this.state.info}
            onClose={onClose('info')}
          >
            Info: Please pay attention to this.
          </Alert>
        </Example>
        <Example>
          <Alert
            type="success"
            visible={this.state.success}
            onClose={onClose('success')}
          >
            Success: Great job! Wow! Much success!
          </Alert>
        </Example>
        <Example>
          <Alert
            type="warning"
            visible={this.state.warning}
            onClose={onClose('warning')}
          >
            Warning: Hmm, this is not good, but it is not terrible.
          </Alert>
        </Example>
        <Example>
          <Alert
            type="error"
            visible={this.state.error}
            onClose={onClose('error')}
          >
            Error: Wow you really screwed this up...
          </Alert>
        </Example>
        <Example>
          <Alert visible={this.state.multi} onClose={onClose('multi')}>
            <div>
              Multiline: This is a multiline default alert. It is just giving
              you some info.
            </div>
            <div>And some more info, with extraa info down here.</div>
            <div>And even more info.</div>
          </Alert>
        </Example>
        <Example>
          <Alert
            title="Such title"
            icon="warning"
            visible={this.state.multiTitle}
            onClose={onClose('multiTitle')}
          >
            <div>
              Multiline with icon and title: This is a multiline default alert.
              It is just giving you some info.
            </div>
            <div>And some more info, with extraa info down here.</div>
            <div>And even more info.</div>
          </Alert>
        </Example>
        <Button onClick={() => this.setState(initial)} text="Reset" />
      </div>
    );
  }
}
