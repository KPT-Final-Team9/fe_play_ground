import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <>
      <nav className="px-[36px] h-[80px] flex-row flex justify-between items-center">
        <div>
          <ul className="flex flex-row gap-[40px]">
            <li>UX / UI</li>
            <li> publising</li>
            <li>Branding</li>
            <li>Motiongraphic</li>
          </ul>
        </div>
        <div>Logo</div>
        <div className="flex flex-row items-center gap-[30px]">
          <label className="input input-bordered flex items-center gap-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none">
              <path
                d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z"
                stroke="#9E9E9E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 18L13.875 14.375"
                stroke="#9E9E9E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              className="grow w-60 "
              placeholder="Search"
            />
          </label>

          <div>
            <p>Log in</p>
          </div>
          <div>
            <Button className="rounded-full">Sign up</Button>
          </div>
        </div>
      </nav>
      <div className="h-[66px] w-full"></div>
      <div>
        <div>
          <h3>디자인팀 테스트중</h3>
          <h3>Responsive Design</h3>
        </div>

        <p>
          Let&apos;s create responsive UI designs that adapt to various screen
          sizes using Figma.
        </p>
      </div>
    </>
  );
}
