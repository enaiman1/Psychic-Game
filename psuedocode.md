1. Create 4 colomns
    1. Wins (start at 0)
    2. losses (start at 0)
    3. Guess left (Start at 9)
    4. Your Guesses so far (starts blank, but will visiably log the letters as they are touched)

2. Computer randomly selects a letter
3. User picks a letter from the keyboard
4. If user picks the correct letter
 * User get a point in the win colomn
 * game resets (computer chooses new letter)

5. If user pick the incorrect letter
    * Guess counter starts at 9 
        * one point is deducted for every wrong guess
        * letters that were guessed apprear under "Your guesses so far"
    * If user picks incorrectly after 9 picks a point is added to loss colomn 
    * game resets 
        * computer chooses new letter
        * Guesses left goes back to 9
        * Your Guess so far goes back to blank