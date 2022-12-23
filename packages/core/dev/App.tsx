import { ComponentProps, splitProps } from "solid-js";

import { Button, I18nProvider, Popover } from "../src";

function MyPopover(props: ComponentProps<typeof Popover>) {
  const [local, others] = splitProps(props, ["children"]);

  return (
    <Popover {...others}>
      <Popover.Trigger class="button">
        {others.isModal ? "Open Modal" : "Open Popover"}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Content class="popover">
            <Popover.Arrow class="arrow" />
            <Popover.Title class="heading">Team meeting</Popover.Title>
            <Popover.Description>
              We are going to discuss what we have achieved on the project.
            </Popover.Description>
            <div>
              <p>12 Jan 2022 18:00 to 19:00</p>
              <p>Alert 10 minutes before start</p>
            </div>
            <Button class="button">Accept</Button>
            {local.children}
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <div class="flex items-center space-x-4 p-4">
        <MyPopover placement="bottom">
          <MyPopover placement="right-start">
            <MyPopover placement="right-start" />
          </MyPopover>
        </MyPopover>
        <MyPopover isModal placement="bottom">
          <MyPopover isModal placement="right-start">
            <MyPopover isModal placement="right-start" />
          </MyPopover>
        </MyPopover>
        <button class="button" onClick={() => console.log("external button triggered")}>
          Outside
        </button>
      </div>
    </I18nProvider>
  );
}
