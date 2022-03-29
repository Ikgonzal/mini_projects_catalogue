#include <iostream>
#include "profile.hpp"

int main() {


  Profile sam("Sam Drakkila", 30, "New York", "USA", "he/him");

  sam.add_hobby("listen to music");
  sam.add_hobby("go surfing");
  sam.add_hobby("travelling");
  sam.view_profile();
  
}
