import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TopicSelect } from "@/components/topicselect";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-[#005655] p-2">
      <TopicSelect />
      <Tabs defaultValue="web" className="h-full flex flex-col">
        <TabsList>
          <TabsTrigger value="web">Web</TabsTrigger>
          <TabsTrigger value="android">Android</TabsTrigger>
          <TabsTrigger value="ios">iOS</TabsTrigger>
          <TabsTrigger value="react-native">React Native</TabsTrigger>
          <TabsTrigger value="flutter">Flutter</TabsTrigger>
          {/* <TabsTrigger value="custom-web">Custom Web</TabsTrigger> */}
        </TabsList>
        <TabsContent value="web" className="h-full">
          <iframe
            src="https://stackblitz.com/edit/mapsindoors-demo?embed=1&file=index.html,styles.css,script.js&hideExplorer=1&hideNavigation=1"
            className="h-full w-full border-0 rounded-md"
            title="mapsindoors-demo"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </TabsContent>
        <TabsContent value="android" className="h-full">
          <Card className="h-full w-full p-4">
            <Label htmlFor="android-code">MapActivity.kt</Label>
            <div className="flex gap-x-4 h-full">
            <Textarea
              placeholder="Code goes here"
              className="h-5/6 w-full resize-none"
              id="android-code"
            />
            <iframe
              src="https://appetize.io/embed/standalone_kmzzcvqqket4rbso6xvurbwgcu?device=pixel7&osVersion=13.0&scale=60"
              width="fit-content"
              height="fit-content"
            ></iframe>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="ios" className="h-full">
          <Card className="h-full w-full p-4">
            <Label htmlFor="ios-code">ViewController.swift</Label>
            <div className="flex gap-x-4 h-full">
            <Textarea
              placeholder="Code goes here"
              className="h-5/6 w-full resize-none"
              id="ios-code"
            />
            <iframe
              src="https://appetize.io/embed/standalone_kmzzcvqqket4rbso6xvurbwgcu?device=iphone14pro&osVersion=16.2&scale=60"
              width="fit-content"
              height="fit-content"
            ></iframe>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="react-native" className="h-full">
          <div
            data-snack-id="@smheard/mapsindoors-playground"
            data-snack-platform="ios"
            data-snack-preview={true}
            data-snack-theme="dark"
            className="overflow-hidden bg-[#fbfcfd] border border-[var(--color-border)] rounded-md h-full w-full"
          ></div>
          <script async src="https://snack.expo.dev/embed.js"></script>
        </TabsContent>
        <TabsContent value="flutter" className="h-full">
          <Card className="h-full w-full p-4">
            <Label htmlFor="flutter-code">main.dart</Label>
            <div className="flex gap-x-4 h-full">
            <Textarea
              placeholder="Code goes here"
              className="h-5/6 w-full resize-none"
              id="flutter-code"
            />
            <iframe
              src="https://appetize.io/embed/standalone_kmzzcvqqket4rbso6xvurbwgcu?device=iphone14pro&osVersion=16.2&scale=60"
              width="fit-content"
              height="fit-content"
            ></iframe>
            </div>
          </Card>
        </TabsContent>
        {/* <TabsContent value="custom-web">Custom Web</TabsContent> */}
      </Tabs>
    </div>
  );
}
