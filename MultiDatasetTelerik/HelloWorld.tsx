import * as React from 'react';


export interface IHelloWorldProps {
  name?: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactNode {
    return (
      <>
        {this.props.name}     
        </>     
    )
  }
}
