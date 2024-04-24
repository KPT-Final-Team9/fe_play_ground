'use client';
import { Button } from '@/components/ui/button';
import React, { useRef } from 'react';
import { Calendar } from '@/components/ui/calendar';

function Page() {
  const buttonRef = useRef(null);
  return (
    <>
      <Button>asddsa</Button>
      <Calendar></Calendar>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>

      <button
        className="btn"
        onClick={() => buttonRef.current!.showModal()}>
        open modal
      </button>
      <dialog
        ref={buttonRef}
        id="my_modal_1"
        className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Page;
