import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Magnetic Storm",
		'fr-fr': "Tempête Magnétique",
		'es-es': "Tormenta Magnética",
		'it-it': "Tempesta Magnetica",
		'pt-br': "Tempestade Magnética",
		'de-de': "Magnetsturm"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque Pokémon en jeu n'a pas de Résistance.",
		'en-us': "Each Pokémon in play has no Resistance.",
		'es-es': "Los Pokémon en juego no tienen ninguna Resistencia.",
		'it-it': "Nessun Pokémon in gioco ha resistenza.",
		'pt-br': "Cada um dos Pokémon em jogo não possui Resistência.",
		'de-de': "Jedes Pokémon im Spiel hat keine Resistenz."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 281574,
		tcgplayer: 91228
	}
}

export default card
