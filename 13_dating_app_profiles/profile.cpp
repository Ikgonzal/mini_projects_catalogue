#include <iostream>
#include "profile.hpp"

Profile::Profile(std::string new_name, int new_age, std::string new_city, std::string new_country, std::string new_pronouns)
{
  name = new_name;
  age = new_age;
  city = new_city;
  country = new_country;
  pronouns = new_pronouns;
}

std::string Profile::view_profile() {

  std::cout << "Name: " << name << "\n";
  std::cout << "Age: " << age << "\n";
  std::cout << "City: " << city << "\n";
  std::cout << "Country: " << country << "\n";
  std::cout << "Pronouns: " << pronouns << "\n";
  std::cout << "Hobbies: \n";

  for(std::string hobby : hobbies) {

    std::cout << "-" << hobby << "\n";
  }
}

void Profile::add_hobby(std::string new_hobby) {

  hobbies.push_back(new_hobby);
}
