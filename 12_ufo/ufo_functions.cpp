#include <iostream>
#include <vector>

// Define functions
void  greet(){
  std::cout << "===============\n"
            << " UFO: The Game \n"
            << "===============\n"
            << "Instructions: save your friend\n"
            << "from alien abduction by guessing the\n"
            << "letters in the codeword.\n\n";
}

void  end_game(std::string answer, std::string codeword)
{
  int misses = 0;
  while (answer != "codecademy" && misses < 7)
    misses++;
  if (answer == codeword)
  {
    std::cout << "\nHooray! You saved the person and"
              << "earned a medal of honor!\n";
  }
  else
  {
    std::cout << "\nOh no! The UFO just flew"
              << "away with another person!\n";
  }
}

void  display_status(std::vector<char> incorrect, std::string answer)
{
    std::cout << "\nIncorrect Guesses:\n";
    for (int i = 0; i < incorrect.size(); i++)
      std::cout << incorrect[i] << ' ';
    std::cout << "\nCodeword:\n";
    for (int k = 0; k < answer.length(); k++)
      std::cout << answer[k] << ' ';
}
