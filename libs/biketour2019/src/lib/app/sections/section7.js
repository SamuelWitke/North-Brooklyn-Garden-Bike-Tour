import React from "react";
import first from "../img/journey/1.jpg";

export default () => (
  <section className="js-section" data-zoom-start="1.5" data-zoom-middle={1}>
    <h2>
      <span className="title-up">Section 7</span>
      <span className="title-down">Garden 7</span>
    </h2>
    <p>
      Gullfoss is one of the sights of Iceland. It is a magnificent waterfall on
      the Hvitá, where the white water of the river cascades over a series of
      step-like barriers stretching from side to side, and then plunges finally
      over a ledge of very hard rock into a yawning abyss more than a hundred
      feet deep, whence it throws up clouds of spray that are carried hither and
      thither as the wind sweeps first this way and then that; so thick is the
      spray, that one's clothing soon becomes saturated on incautiously getting
      into it.{" "}
    </p>
    <p>
      Gullfoss is one of the finest waterfalls in Europe, and it is only
      surpassed in grandeur, if at all, by one or two others in Iceland. We saw
      the falls at their best, for when we arrived the sun was shining brightly
      and a rainbow playing over the spray as it rose from the gorge. It is true
      that the sky clouded over afterwards, and that rain began to fall before
      we left Gullfoss, but we carried away the impression of the broken waters
      of the cascade sparkling in the sun, and of the colours of the rainbow
      playing on the spray over the ravine. The water has carved out a deep
      gorge in the basalt, and below the falls there are many good specimens of
      basaltic columns. In the lower part of the gorge there are the picturesque
      remains of a very fine hard dyke that has a much softer one beside it.
      These remains are to be seen on both sides of the river, and they have
      assumed the outline and form of a number of castellated buildings perched
      high upon prominent peaks.
    </p>
    <figure>
      <img alt="Img 1" src={first} />
      <figcaption>
        Farther on there were many evidences of ice-action: the rounded forms of
        boulders attracted our attention, as did numerous ice-scratchings on
        them; some of the outcropping lumps were beautifully rounded.
      </figcaption>
    </figure>
  </section>
);
