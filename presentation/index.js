// Import React
import React from "react";
import CodeSlide from 'spectacle-code-slide';
import { observable, computed, useStrict, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Icon, Grid, Input, Header, Button } from 'semantic-ui-react';
import CoffeeCup from './CoffeeCup';
import CoffeeCupObserver from './CoffeeCupObserver';
import CoffeeCupNoObserver from './CoffeeCupNoObserver';


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

          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Dead-Simple MobX
              </Heading>
            </Appear>
            <Appear fid="2">
              <Image src={images.logo.replace("/", "")} margin="40px auto 60px" height="100px"/>
            </Appear>
            <Appear fid="3">
              <div>
                <Text textSize="2em" margin="20px 0px 0px" bold textColor="tertiary">Yoni Weisbrod</Text>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="primary">@yoniweisbrod</Text>
              </div>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote textSize="40px">I grumpily ignored the comments about mobx for a while, then finally broke and used it on a small side project. The results were...
disheartening. Because (at least for my team and the specific projects we do), mobx was much much better.</Quote>
              <Cite>A guy on HackerNews</Cite>
            </BlockQuote>
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
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Appear fid="1">
              <Heading size={1} fit caps lineHeight={1} textColor="black">
                Why MobX?
              </Heading>
            </Appear>
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
              <Heading>Mobx...</Heading>
              <List>
                <Appear><ListItem>Mutable</ListItem></Appear>
                <Appear><ListItem>Kind of like a spreadsheet</ListItem></Appear>
                <Appear><ListItem>Has a tiny API:</ListItem></Appear>
                <Appear>
                  <List ordered start={2} type="A">
                      <ListItem>@observable</ListItem>
                      <ListItem>@computed</ListItem>
                      <ListItem>@action</ListItem>
                      <ListItem>@observer (from MobX-React)</ListItem>
                  </List>
                </Appear>
              </List>
              <Appear><Heading textSize="1.5em" margin="8px 0px 0px">Let's see it in action!</Heading></Appear>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <CoffeeCup />
            </div>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <div>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/caffeine_no_observer.example")}
                margin="20px auto"
              />
              <Text>Direct, Synchronous state mutation.</Text>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary" textColor="primary">
            <div>
              <Appear><CoffeeCupNoObserver /></Appear>
              <Appear><Text textSize="1.5em" textColor="tertiary">No reaction until the component is re-rendered :(</Text></Appear>
            </div>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <div>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/caffeine_with_observer.example")}
                margin="20px auto"
              />
              <Text>Add @observer to automatically re-render the component.</Text>
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
              <Appear><CoffeeCupObserver /></Appear>
              <Appear><Text textSize="1.5em" textColor="tertiary">We have a reaction!</Text></Appear>
            </div>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Optimize @observable derivations with @computed
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/caffeine_final.example")}
            ranges={[ 
              { loc: [1,2] },
              { loc: [2,3] },
              { loc: [6,9] },
              { loc: [14,17] },
              { loc: [18,31] },
              { loc: [31,45] },
            ]} />

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <CoffeeCup />
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
                <Appear><ListItem>Option A: Use a boilerplate, e.g. <Link href="https://github.com/yonibot/react-mobx-es7-boilerplate">https://github.com/yonibot/react-mobx-es7-boilerplate</Link></ListItem></Appear>
                <Appear><ListItem>Option B: Install MobX, MobX-React, and MobX-React-Devtools</ListItem></Appear>
              </List>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={`
                    npm install mobx --save
                    npm install mobx-react --save

                    // And  read this for help enabling decorators and class properties:
                    // http://mobxjs.github.io/mobx/best/decorators.html
                  `}
                  margin="20px auto"
                />
              </Appear>
            </div>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                MobX in the Wild
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Common Patterns
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <Heading>Common Patterns</Heading>
              <List>
                <Appear><ListItem>Explicit Actions</ListItem></Appear>
              </List>
            </div>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/my_stores.example")}
            ranges={[ 
              { loc: [9,14] },
            ]} />

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <Heading>Common Patterns</Heading>
              <List>
                <ListItem>Explicit Actions</ListItem>
                <Appear><ListItem>Domain Stores</ListItem></Appear>
              </List>
            </div>
          </Slide>



          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <Heading>Common Patterns</Heading>
              <List>
                <Appear><ListItem>Explicit Actions</ListItem></Appear>
                <Appear><ListItem>Domain Stores</ListItem></Appear>
                <Appear><ListItem>Automagic Network Requests</ListItem></Appear>
                <Appear><ListItem>Simple Routing</ListItem></Appear>
              </List>
              <Appear><Heading textSize="1.5em" margin="8px 0px 0px">But wait! There's more!</Heading></Appear>
            </div>
          </Slide>




          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Thank you!
            </Heading>
          </Slide>

















          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Dead-Simple MobX
            </Heading>
            <Heading size={1} fit caps>
              A ReactJS Presentation Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Where You Can Write Your Decks In JSX
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>


          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
