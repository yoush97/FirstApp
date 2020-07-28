package com.app;

import android.os.Bundle; // Line added for Splash Screen
import org.devio.rn.splashscreen.SplashScreen;// for Splash Screen

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "App";
  }


  // Added these lOC also for Splash Screen
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }

}

