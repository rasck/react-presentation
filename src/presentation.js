// Import React
import React from "react";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fill,
  Fit,
  Link,
  ComponentPlayground,
  CodePane,
  Magic,
  Notes,
  S,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress={"bar"}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Notes>
            <h4>You should say someting important about</h4>
            <ol>
              <li>React</li>
              <li>Different use case for react</li>
            </ol>
          </Notes>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Concepts of React
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            - An introduction to react, react-native, expo, react VR/AR &
            spectacle
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why React?
          </Heading>
          <BlockQuote>
            <Quote>React really shines when your data changes over time.</Quote>
            <Cite textColor="secondary">Pete Hunt @ Facebook</Cite>
          </BlockQuote>
          <Link
            textColor="primary"
            href="https://reactjs.org/blog/2013/06/05/why-react.html"
          >
            https://reactjs.org/blog
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Image padding={30} src="/images/mvc.png" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Image padding={30} src="/images/mvc-2.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Template-less View Library</Heading>
          <List>
            <ListItem>
              Use a full featured programming language instead of template
              engine
            </ListItem>
            <ListItem>
              Uses JSX. An extension that makes JavaScript look like HTML for
              readability
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Layout>
            <Fill>
              <Image padding={30} src="/images/iamdeveloper-jsx.png" />
            </Fill>
            <Fill>
              <Image padding={30} src="/images/giphy.gif" />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading textColor="primary">JSX is really just JavaScript!</Heading>
          <Link href="http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&code=">
            <Text textColor="primary">Try it out yourself!</Text>
          </Link>
          <Image padding={30} src="/images/babel-jsx.png" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary">
            A react components is...
          </Heading>
          <BlockQuote>
            <Quote size={1}>
              A highly cohesive building block for UIs loosly coupled with other
              components.
            </Quote>
            <Cite textColor="primary">Pete Hunt @ Facebook</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="green">
          <Heading size={6} textColor="primary" caps>
            Say Hello To React
          </Heading>
          <ComponentPlayground
            theme="dark"
            code={require("!raw-loader!./assets/code-examples/react.hello.example")}
          />
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            React re-render on every change. Data is always up to date and it is
            simple to follow the dataflow
          </Heading>
          <Text>
            - There is no databinding nor is there a need to monitor if a model
            gets dirty
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps>
            Virtual Dom
          </Heading>
          <Image padding={30} src="/images/react-dom.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary" caps>
            Virtual Dom = Re-render is fast!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="green">
          <Heading size={6} textColor="primary" caps>
            Data flows down to child components through properties
          </Heading>
          <ComponentPlayground
            theme="dark"
            code={require("!raw-loader!./assets/code-examples/react.propety.example")}
          />
        </Slide>
        <Slide transition={["Zoom"]} bgColor="secondary" textColor="green">
          <Heading size={6} textColor="primary" caps>
            Props are immutable
          </Heading>
          <ComponentPlayground
            theme="dark"
            code={require("!raw-loader!./assets/code-examples/react.propety.immutable.example")}
          />
        </Slide>
        <Slide transition={["Slide"]} bgColor="secondary" textColor="green">
          <Heading size={6} textColor="primary" caps>
            State however is mutable
          </Heading>
          <ComponentPlayground
            theme="dark"
            code={require("!raw-loader!./assets/code-examples/react.state.example")}
          />
        </Slide>
        <Slide transition={["Slide"]} bgColor="secondary" textColor="green">
          <Heading size={6} textColor="primary" caps>
            State can become props to the children
          </Heading>
          <ComponentPlayground
            theme="dark"
            code={require("!raw-loader!./assets/code-examples/react.state.to.children.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="senary">
            State vs Props
          </Heading>
          <Layout>
            <Fill>
              <Text textColor="primary">Props:</Text>
              <Appear>
                <List>
                  <ListItem textColor="quartenary">Passed from Parent</ListItem>
                  <ListItem textColor="quartenary">Read-only</ListItem>
                  <ListItem textColor="quartenary">
                    Type check on propTypes
                  </ListItem>
                </List>
              </Appear>
            </Fill>
            <Fill>
              <Text textColor="primary">State:</Text>
              <Appear>
                <List>
                  <ListItem textColor="quartenary">
                    Used within a component
                  </ListItem>
                  <ListItem textColor="quartenary">this.state to read</ListItem>
                  <ListItem textColor="quartenary">
                    this.setState() to update
                  </ListItem>
                </List>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" caps>
            React has a 1-way data flow
          </Heading>
          <Text textColor="primary">
            You can only go the other way using events (callbacks)
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="green">
          <Heading size={6} textColor="primary" caps>
            Use events to call parent
          </Heading>
          <ComponentPlayground
            theme="dark"
            code={require("!raw-loader!./assets/code-examples/react.event.example")}
          />
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary">
            A React class component has a lot of lifecycle methods
          </Heading>
          <Heading size={6} textColor="primary">
            Mounting
          </Heading>
          <Text textColor="quartenary">
            (componentWillMount, componentDidMount)
          </Text>
          <Heading size={6} textColor="primary">
            Updating
          </Heading>
          <Text textColor="quartenary">
            (componentWillReceiveProps, shouldComponentUpdate,
            componentWillUpdate, componentDidUpdate)
          </Text>
          <Heading size={6} textColor="primary">
            UnMounting
          </Heading>
          <Text textColor="quartenary">(componentWillUnMount)</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="green">
          <Heading size={6} textColor="primary" caps>
            Lifecycle methods example
          </Heading>
          <ComponentPlayground
            theme="dark"
            code={require("!raw-loader!./assets/code-examples/react.components.lifecycle.example")}
          />
          <Text textColor="quartenary">
            *The methods get called multiple times. I'm not sure why
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="green">
          <Heading size={6} textColor="primary" caps>
            Lifecycle methods example
          </Heading>
          <ComponentPlayground
            theme="dark"
            code={require("!raw-loader!./assets/code-examples/react.lifecycle.example")}
          />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Link href="https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1">
            <Heading size={3} textColor="primary">
              <S type="underline">
                How and when to use lifecycle methods in react?
              </S>
            </Heading>
          </Link>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Link href="http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/">
            <Heading size={3} textColor="primary">
              <S type="underline">
                What happens when state changes or when we receive props from
                parent?
              </S>
            </Heading>
          </Link>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary">
            Devloper tools
          </Heading>
          <Text textColor="primary">
            There is a great chrome extension you can use to inspect react
            component hierachies
          </Text>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading textColor="primary" size={3}>
            Setup React
          </Heading>
          <Link href="https://nodejs.org/en/">
            <Text textColor="primary">Install node (current)</Text>
          </Link>
          <Link href="https://code.visualstudio.com/">
            <Text textColor="primary">Get an environment (VS Code)</Text>
          </Link>
          <Text textColor="primary">Setup your react app:</Text>
          <CodePane
            lang="powershell"
            source={require("!raw-loader!./assets/code-examples/create-react.example")}
          />
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Link href="https://github.com/rasck/webpack-tutorials/tree/master/02_webpack-prac-react-intro">
            <Text textColor="primary">
              <S type="underline">
                If you want to set an react with webpack enviroment up yourself,
                you can look at my github
              </S>
            </Text>
          </Link>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading textColor="primary" size={3}>
            Online enviroments
          </Heading>
          <Link href="https://jsfiddle.net/reactjs/69z2wepo/">
            <Text textColor="primary">react base fiddle</Text>
          </Link>
          <Link href="https://codesandbox.io/s">
            <Text textColor="primary">code sandbox</Text>
          </Link>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary" size={3}>
            Exercise
          </Heading>
          <Heading textColor="primary" size={5}>
            Create a shopping cart
          </Heading>
          <Text textColor="primary">Find out what are the components?</Text>
          <Text textColor="primary">
            Write the components - don't focus on css
          </Text>
          <Image padding={30} src="/images/shopping-cart.png" />
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="tertiary">
            React Native
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary">
            React Native knows how to take the outputs from a react component
            and place in on a mobile screen
          </Heading>
          <Heading size={6} textColor="primary">
            It can provide you the core components, such as images, text, button
            etc.
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">
            It's easy to get started developing to React Native
          </Heading>
          <Link href="https://facebook.github.io/react-native/docs/getting-started.html">
            <Text textColor="tertiary">
              <S type="underline">Goto facebook's get started guide</S>
            </Text>
          </Link>
          <Text textColor="primary">
            If you follow the get started guide. Remember that your phone and
            computer should be on the same network!
          </Text>
          <Text textColor="primary">
            We will not use the facebook guide however...
          </Text>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Link href="https://snack.expo.io/">
            <Heading size={3} textColor="tertiary">
              <S type="underline">Expo's online editor</S>
            </Heading>
          </Link>
          <Text textColor="primary">
            Expo both have an SDK where you can develop on your desktop, but you
            can also create simple apps in the browser!
          </Text>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">
            React AR & VR
          </Heading>
          <Link href="https://facebook.github.io/react-vr/docs/getting-started.html#content">
            <Text textColor="tertiary">
              <S type="underline">Install guide</S>
            </Text>
          </Link>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="tertiary">
            Spectacle
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="tertiary">
            Resources
          </Heading>
          <Link href="https://reactjs.org">
            <Text textColor="primary">
              <S type="underline">reactjs.org</S>
            </Text>
          </Link>
          <Link href="https://github.com/enaqx/awesome-react">
            <Text textColor="primary">
              <S type="underline">github.com/enaqx/awesome-react</S>
            </Text>
          </Link>
          <Link href="https://redux.js.org">
            <Text textColor="primary">
              <S type="underline">redux.js.org</S>
            </Text>
          </Link>
          <Link href="https://reacttraining.com/react-router/">
            <Text textColor="primary">
              <S type="underline">reacttraining.com/react-router/</S>
            </Text>
          </Link>
          <Link href="https://webpack.js.org/">
            <Text textColor="primary">
              <S type="underline">webpack.js.org</S>
            </Text>
          </Link>
        </Slide>
      </Deck>
    );
  }
}

/* IMPORTANT: to make CodePane you need to 
  1 Get the prism css & js files for the languages you want
  2 reference the prism css file in the index.html file (in the public folder)
  3 I had to go to the node_modules folder find prismjs -> components -> prism-core.js & prism-core.min.js and repace it with the downloaded prism.js javascript file
  4 At last to make raw-loader work I installed it locally 
      a npm install --save-dev raw-loader
      b then you need to add '// eslint import/no-webpack-loader-syntax: off'  somewhere in your file to avoid babel errors
          * be aware that we now have a tight coupling to webpack. In a later upate the react team might remove webpack...

*/
/* eslint import/no-webpack-loader-syntax: off */
