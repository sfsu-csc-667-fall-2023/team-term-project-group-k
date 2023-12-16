Texas Hold'em App

During game play

| Functionality | Input | Pre-conditions | Post-conditions | API Endpoint |
| ------------- | ----- | -------------- | --------------- | ------------ |
| Raise | int amount | player_id is a player and is in game_id.  It is player_id’s turn.  Can afford the raise.  Player is not folded.  Has not gone all in | Change players bet.  Pass turn.  If the user raises all their money treat it as all in | /games/:Gameid/:playerID/Raise |
| Fold | player_id | player_id is a player in game_id.  It is player_id’s turn.  Player is not folded.  Has not gone all in | Take user out of the round.  Pass turn.  Skip their turn for the rest of the round | /games/:Gameid/:playerID/fold |
| Check | player_id | player_id is a player in game_id.  It is player_id’s turn.  Player is not folded.  Has not gone all in | Pass turn | /games/:Gameid/:playerID/Check |
| Call | player_id | player_id is a player in game_id.  It is player_id’s turn.  Can afford the call.  Player is not folded.  Has not gone all in | Set user's bank roll to the current amount.  Pass turn | /games/:Gameid/:playerID/call |
| All in | player_id | player_id is a player in game_id.  It is player_id’s turn.  Player is not folded.  Has not gone all in | Set user's bank roll to their holdings.  Pass turn.  Skip their turn for the rest of the round | /games/:Gameid/:playerID/allin |
| Type in chat | player_id | User has to be in a game | Display string in the game window | /games/:Gameid/:playerID/message |
| Quit Game | player_id | player_id is a player in game_id | Take user out of the game.  Treat as folded | /games/:Gameid/:playerID/quit |

