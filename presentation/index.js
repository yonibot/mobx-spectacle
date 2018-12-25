// Import React
import React from "react";
import CodeSlide from 'spectacle-code-slide';
import { observable, computed, useStrict, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Icon, Grid, Input, Header, Button } from 'semantic-ui-react';
import CoffeeCup from './CoffeeCup';
import CoffeeCupObserver from './CoffeeCupObserver';
import CoffeeCupNoObserver from './CoffeeCupNoObserver';
import CoffeeCupReact from './CoffeeCupReact';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/mobx.png"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote textSize="35px">I grumpily ignored the comments about mobx for a while, then finally broke and used it on a small side project. The results were...
disheartening. Because (at least for my team and the specific projects we do), mobx was much much better.</Quote>
              <Cite>Someone on HackerNews</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={[]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Dead-Simple MobX
              </Heading>
            </Appear>
            <Appear fid="2">
              <div>
                <Image src={images.logo.replace("/", "")} margin="40px auto 60px" height="100px"/>
                <div>
                  <Text textSize="2em" margin="20px 0px 0px" bold textColor="tertiary">Yoni Weisbrod</Text>
                  <Text textSize="1em" margin="20px 0px 0px" bold textColor="primary">Twitter: @yoniweisbrod</Text>
                  <Text textSize="1em" margin="20px 0px 0px" bold textColor="primary">GitHub: @yonibot</Text>
                  <br />
                  <Text textColor='tertiary'>http://mobx-talk.surge.sh/</Text>
                </div>
              </div>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps textColor="primary">
              Goals
            </Heading>
            <List>
              <ListItem textColor="tertiary">Why MobX?</ListItem>
              <ListItem textColor="tertiary">MobX in Action</ListItem>
              <ListItem textColor="tertiary">Getting Set Up</ListItem>
              <ListItem textColor="tertiary">Common Patterns</ListItem>
              <ListItem textColor="tertiary">Further Resources</ListItem>
            </List>
            <Text textColor='primary'>And some fun along the way!</Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <Heading>WARNING</Heading>
              <List>
                <Appear><ListItem>ES6 and ES7 up ahead.</ListItem></Appear>
                <Appear><ListItem>But it can all be done with ES5!</ListItem></Appear>
              </List>
            </div>
          </Slide>


          <Slide transition={["zoom"]} bgColor="primary">
              <Heading size={1} fit caps lineHeight={1} textColor="black">
                Why MobX?
              </Heading>
            <Appear fid="2">
              <Heading size={1} fit caps>
                Incredible efficiency
              </Heading>
            </Appear>
            <Appear fid="3">
              <Text textSize="1.5em" margin="20px 0px 0px" bold>...without the boilerplate!</Text>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <CoffeeCup />
            </div>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <div>
              <Text textColor='tertiary'>Plain old React component.</Text>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/caffeine_react.example")}
                margin="20px auto"
              />
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <Text textColor='tertiary'>Step 1: Move from State to @observable</Text>
            </div>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/caffeine_react.example")}
            ranges={[ 
              { loc: [5,8] }
            ]} />

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/caffeine_no_observer.example")}
            ranges={[ 
              { loc: [6,8] }
            ]} />

          <Slide transition={["fade"]} bgColor="primary">
            <div>
              <Text textColor='tertiary'>Step 2: Now we can mutate the state directly, synchronously.</Text>
            </div>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/caffeine_no_observer.example")}
            ranges={[ 
              { loc: [6,11] }
            ]} />

          <Slide transition={["fade"]} bgColor="primary" textColor="primary">
            <div>
              <CoffeeCupNoObserver />
              <Text textSize="1.2em" textColor="tertiary">In MobX, state or data changes have no inherent effect on rendering.</Text>
            </div>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <div>
              <Text textColor='tertiary'>But you can subscribe to observable changes in a component's render function using @observer</Text>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/caffeine_with_observer.example")}
                margin="20px auto"
              />
              <Text textColor='tertiary' size="0.5em">And then ony components containing mutated state will re-render</Text>
            </div>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/caffeine_final.example")}
            ranges={[ 
              { loc: [2,3] },
              { loc: [6,8] },
            ]} />

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <CoffeeCupObserver />
              <Text textSize="1.5em" textColor="tertiary">We have a reaction!</Text>
            </div>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Optimize @observable derivations further with @computed
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/caffeine_final.example")}
            ranges={[
              { loc: [6,17] },
              { loc: [18,31] },
            ]} />

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <CoffeeCup />
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <Heading>Mobx...</Heading>
              <List>
                <ListItem>Uses built-in Javascript references rather than Redux-style immutability.</ListItem>
                <ListItem>Does not care how you store your data, but makes it easy to use OO patterns. Example to follow :)</ListItem>
                <ListItem>Built-in performance optimizations for rendering.</ListItem>
                <ListItem>Nudges you towards thinking like a spreadsheet (X data change triggers Y effect). Example to follow :)</ListItem>
              </List>
            </div>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Installing MobX</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  and Mobx-React, Mobx-React-Devtools, ES7, etc...
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <Heading>Easy!</Heading>
              <List>
                <ListItem>Option A: Use a boilerplate, e.g. <Link href="https://github.com/yonibot/react-mobx-es7-boilerplate">https://github.com/yonibot/react-mobx-es7-boilerplate</Link></ListItem>
                <ListItem>Option B: Install MobX, MobX-React, and MobX-React-Devtools</ListItem>
              </List>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={`
                    npm install mobx --save
                    npm install mobx-react --save
                    npm install --save-dev mobx-react-devtools

                    // And  read this for help enabling decorators and class properties:
                    // http://mobxjs.github.io/mobx/best/decorators.html
                  `}
                  margin="20px auto"
                />
              </Appear>
            </div>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
              <Heading size={1} caps fit textColor="primary">
                MobX in the Wild
              </Heading>
              <Heading size={1} caps fit textColor="tertiary">
                Common Patterns
              </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <List>
                <ListItem>Explicit Actions</ListItem>
              </List>
            </div>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/my_stores.example")}
            ranges={[ 
              { loc: [0,13] },
              { loc: [9,14] },
              { loc: [30,31] },
            ]} />

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <List>
                <ListItem>Explicit Actions</ListItem>
                <ListItem>Organizing state using domain stores</ListItem>
              </List>
            </div>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/my_stores.example")}
            ranges={[ 
              { loc: [0,13] },
              { loc: [14,16] },
              { loc: [17,20] },
              { loc: [20,30] },
              { loc: [32,38] },
            ]} />

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <List>
                <ListItem>Explicit Actions</ListItem>
                <ListItem>Organizing state using domain stores</ListItem>
                <ListItem>Automagic Network Requests</ListItem>
              </List>
            </div>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/my_stores.example")}
            ranges={[ 
              { loc: [3,8] }
            ]} />

          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Further Resources
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor='secondary'>
              <List textColor="primary">
                <ListItem>MobX and MobX-React Repo Docs</ListItem>
                <ListItem>Michel's Egghead Course on MobX (basic) - <Link src="https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx">https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx</Link></ListItem>
                <ListItem>MobX Gitter - <Link src="https://gitter.im/mobxjs/mobx">https://gitter.im/mobxjs/mobx</Link></ListItem>
                <ListItem>Michel's posts on Medium - <Link src="https://medium.com/@mweststrate/">https://medium.com/@mweststrate/</Link></ListItem>
                <ListItem>These slides - <Link src="https://github.com/yonibot/mobx-spectacle">https://github.com/yonibot/mobx-spectacle</Link></ListItem>
                <ListItem>The Sample Team Todos app - <Link src="https://github.com/yonibot/todos-mobx-semantic">https://github.com/yonibot/todos-mobx-semantic</Link></ListItem>
              </List>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Thank you!
            </Heading>
            <br /><br /><br />
            <Text textSize="1em" textColor="tertiary">Yoni Weisbrod</Text>
            <Text textSize="1em">Twitter: <Link src="https://twitter.com/yoniweisbrod">@yoniweisbrod</Link></Text>
            <Text textSize="1em">GitHub: <Link src="https://github.com/yonibot">@yonibot</Link></Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
