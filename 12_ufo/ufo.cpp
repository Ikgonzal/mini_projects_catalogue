#include <iostream>
#include "ufo_functions.hpp"

int main() {

  greet();
  std::string codeword = "codecademy";
  std::string answer   = "__________";
  int misses = 0;

  std::vector<char> incorrect;
  char letter;
  while(answer != codeword && misses < 7)
  {
    bool guess = false;
    display_misses(misses);
    display_status(incorrect, answer);
    std::cout << "\nPlease enter your guess: \n";
    std::cin >> letter;
    for (int j = 0; j < codeword.length(); j++)
    {
      if (codeword[j] == letter)
      {
        answer[j] = letter;
        guess = true;
      }
    }
    if (guess)
      std::cout << "\nCorrect!\n";
    else
    {
      std::cout << "\nIncorrect! The tractor beam pulls the person in further.";
      incorrect.push_back(letter);
      misses++;
    }
  }

  end_game(answer, codeword);

}
