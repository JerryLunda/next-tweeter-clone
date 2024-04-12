
import BannerTop from './ui/home/bannerTop';
import FormTweet from './ui/home/formTweet';
import {tweetsData} from './ui/data/post';
import Post from './ui/home/post';
import { PostType } from './ui/data/definitions';

export default function Home() {
  return (
    <main className="border border-t-0 border-[#EBEEF0] flex">
      <div className='w-8/12'>
        <BannerTop/>
        <hr />
        <FormTweet/>
        <hr />

        <div>
        {tweetsData.map((tweet, index) => (
          <Post key={index} {...tweet as PostType} />
        ))}
        </div>
        
      </div>
      <div className='w-4/12 border border-t-0 border-[#EBEEF0] flex'>
        <h1>Tainding</h1>
      </div>
    </main>
  );
}
