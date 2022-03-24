#include <iostream>
#include <cstdlib>

int main() {

  std::cout << "MAGIC 8-BALL:\n";
  srand(time(NULL));
  int answer = std::rand() % 9;
  if (answer == 0)
    std::cout << "It is certain\n";
  else if (answer == 1)
    std::cout << "Outlook good\n";
  else if (answer == 2)
    std::cout << "Without a doubt\n";
  else if (answer == 3)
    std::cout << "Don't count on it\n";
  else if (answer == 4)
    std::cout << "My reply is no\n";
  else if (answer == 5)
    std::cout << "Outlook not so good\n";
  else if (answer == 6)
    std::cout << "Signs point to yes\n";
  else if (answer == 7)
    std::cout << "As I see it, yes\n";
    else if (answer == 8)
    std::cout << "I Cannot predict now\n";
  else 
    std::cout << "Very doubtful\n";

}
