import React from "react";
import Link from "next/link";

const Events = () => {
  const events = [
    {
      title: "1title",
      slug: "link1",
      loc: "Mumbai, India",
      description: "description 1 is here",
      price: 599,
      melons: 8,
      twitter: {
        likes: 5,
        retweets: 15,
      },
    },
    {
      title: "2title",
      slug: "link2",
      loc: "Bangalore, India",
      description: "description 2 is here",
      price: 699,
      melons: 7,
      twitter: {
        likes: 5,
        retweets: 15,
      },
    },
  ];
  return (
    <div>
      <form>
        <input type={"text"} className="search-box"></input>
      </form>
      <div className="marquee-container">
        <p behavior="" direction="" className="marquee-text">
          Move this text from left to right
        </p>
      </div>
      <Link className="listevent-btn" href={`./list-your-event`}>
        List Your Event
      </Link>
      <h3>Featured Events</h3>
      <div className="events-grid">
        {events.map((event) => (
          <div className="event-box">
            <div className="event-location">{event.loc}</div>
            <div className="event-title">{event.title}</div>
            <div className="event-description">{event.description}</div>
            <a className="event-enterbtn" href={`./event/${event.slug}`}>
              Enter
            </a>
            <button type="button" className="event-favbtn">
              ❤️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
