var Player = function(symbol, is_computer, human_player_name){
	symbol = symbol || "x";
	is_computer = is_computer || false;

	this.symbol = symbol;
	this.is_computer = is_computer;
	this.human_player_name = human_player_name;
}
