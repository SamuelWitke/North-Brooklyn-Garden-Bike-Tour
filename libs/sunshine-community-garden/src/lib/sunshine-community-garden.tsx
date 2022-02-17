import './sunshine-community-garden.module.css';

/* eslint-disable-next-line */
export interface SunshineCommunityGardenProps {}

export function SunshineCommunityGarden(props: SunshineCommunityGardenProps) {
  return (
    <section className="js-section" data-zoom-start="1.5">
    <h2>
      <span className="title-up">
        99-100 McKibben Street Williamsburg, Brooklyn
      </span>
      <span className="title-down">Sunshine Community Garden</span>
    </h2>
    <p>
      This garden is a peaceful sanctuary, where lots of flowers
      bloom,vegetables grow, and children are welcome to come and go. The group
      holds annual barbecues and all summer long there are workshops for the
      children. They also welcome family and church gatherings into the garden.
      Sunshine is a wonderful community garden located off of busy Graham Ave.
      The garden is mostly vegetable beds. In the front there is a star shaped
      children's bed & pint sized table in the children's area. There is a
      swinging bench-rose arbor in the middle.
    </p>
    <p>
      This garden is under the jurisdiction of NYC Parks and supported by
      GreenThumb, the nation's largest urban gardening program. If you are
      interested in joining, starting, or supporting a community garden, contact
      NYC Parks GreenThumb.
    </p>
  </section>
  );
}

export default SunshineCommunityGarden;
