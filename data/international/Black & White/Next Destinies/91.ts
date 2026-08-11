import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Skyarrow Bridge",
		'fr-fr': "Pont Sagiciel",
		'es-es': "Puente Saeta",
		'it-it': "Ponte Freccialuce",
		'pt-br': "Ponte Flecha Celeste",
		'de-de': "Himmelspfeilbrücke"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le coût de Retraite de chaque Pokémon de base en jeu est diminué de Colorless.",
		'en-us': "The Retreat Cost of each Basic Pokémon in play is Colorless less.",
		'es-es': "El Coste de Retirada de cada Pokémon Básico en juego es de Colorless menos.",
		'it-it': "Il costo di ritirata di ciascun Pokémon Base in gioco è ridotto di Colorless.",
		'pt-br': "O Custo para Recuar de cada Pokémon Básico em jogo é de um Colorless a menos.",
		'de-de': "Die Rückzugskosten aller Basis-Pokémon im Spiel verringern sich um Colorless."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 280316,
		tcgplayer: 89285
	}
}

export default card
