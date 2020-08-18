import React, { Component } from "react";
import arMod from './../assets/3d/scene.gltf'

class AppFormHeading extends Component {

  render() {
    return (
      <div className="col-12 my-5">
          <a href="intent://arvr.google.com/scene-viewer/1.0?file=./../assets/3d/scene.gltf#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;">Avocado</a>

      </div>
    );
  }
}

export default AppFormHeading;
