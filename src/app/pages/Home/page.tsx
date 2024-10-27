import { SpotlightPreview } from "@/app/components/mainPage/mainpage";


const MainPage: React.FC = () => {
  return (
    <>
      <div className="w-full h-full p-10 rounded-md bg-neutral-900 flex justify-center relative">
        <SpotlightPreview />
      </div>
    </>
  )
}

export default MainPage;