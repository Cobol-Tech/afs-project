// import ChatContainer from "@/components/ChatContainer";
// import Contact from "@/components/Contact";
import { ChatLayout } from "@/components/chat-layout";

// const {cookies} from

const Chat = () => {
  // const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = undefined;
  return (
    <>
      <main className="flex  flex-col items-center justify-center h-[calc(92dvh)] sm:h-[calc(88dvh)]  gap-4">
        {/* <div className="z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex"> */}
        <div className="z-10 border rounded-lg max-w-8xl w-full h-full text-sm lg:flex mx-auto ">
          <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={6} />
        </div>
        {/* <Contact />  =========> Sidebar*/}
        {/* <ChatContainer /> */}
      </main>
    </>
  );
};

export default Chat;
