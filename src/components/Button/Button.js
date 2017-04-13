import React from 'react';

/**
 * A button that will run a callback on click
 * ```javascript
 *  <Button onClick={alert} text="Submit" />
 * ```
 */
class Button extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    if (this.props.onClick) {
      this.props.onClick(ev, this.props.text);
    }
  }

  render() {
    const { children, className, text, disabled, style } = this.props;
    return (
      <button
        style={style}
        disabled={disabled}
        onClick={this.handleClick}
        className={className || 'weave-button'}
      >
        {children || text}
      </button>
    );
  }
}

Button.propTypes = {
  /**
 * Callback that will be run when the button is clicked.
 */
  onClick: React.PropTypes.func,
  /**
 * Text that will be used as the button label.
 * If this props is provided, it will be passed back to the `onClick` handler
 */
  text: React.PropTypes.string,
  /**
 * Disable the button.
 */
  disabled: React.PropTypes.bool,
};

Button.defaultProps = {
  text: 'Submit'
};

export default Button;
