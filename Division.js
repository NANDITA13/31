class Division {

  constructor (x,y,w,h) {

    var opction = {

          isStatic:true
    }

    thisbody = Bodiesrectangle (x,y,w,h,options);
    thisw = w;
    thish = h;
  World.add(world,thisbody);
}

display () {

          var pos = this.body.position;
          rectMode (CENTER);
          fill("white");
          rect(pos.x , pos.y , this.w , this.h);
}

}