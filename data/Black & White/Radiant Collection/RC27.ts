import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Wally",
		es: "Blasco",
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for a card that evolves from 1 of your Pokémon (excluding Pokémon-EX) and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward. You can use this card during your first turn or on a Pokémon that was put into play this turn.",
		es: "Busca en tu baraja 1 carta que evolucione de 1 de tus Pokémon (excluyendo Pokémon-EX) y ponla sobre ese Pokémon. (Esto equivale a hacer evolucionar a ese Pokémon). Baraja las cartas de tu baraja después. Puedes usar esta carta durante tu primer turno o sobre un Pokémon que se haya puesto en juego en este turno.",
	},

	trainerType: "Supporter",

	thirdParty: {
		tcgplayer: 113770
	}
}

export default card
