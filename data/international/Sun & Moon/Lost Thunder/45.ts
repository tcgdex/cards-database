import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'es-es': "Houndour",
		'it-it': "Houndour",
		'pt-br': "Houndour",
		'de-de': "Hunduster"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		228,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Team Hunt",
				'fr-fr': "Chasse en Équipe",
				'es-es': "Caza en Equipo",
				'it-it': "Caccia in Branco",
				'pt-br': "Caçada em Equipe",
				'de-de': "Teamjagd"
			},
			effect: {
				'en-us': "Draw a card for each of your Houndour in play.",
				'fr-fr': "Piochez une carte pour chacun de vos Malosse en jeu.",
				'es-es': "Roba 1 carta por cada uno de tus Houndour en juego.",
				'it-it': "Pesca una carta per ciascuno dei tuoi Houndour in gioco.",
				'pt-br': "Compre 1 carta para cada um dos seus Houndour em jogo.",
				'de-de': "Ziehe 1 Karte für jedes deiner Hunduster im Spiel."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Flamboiement",
				'es-es': "Llama",
				'it-it': "Fiammata",
				'pt-br': "Chama",
				'de-de': "Flackern"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "To corner prey, they check each other's location using barks that only they can understand.",
	},

	thirdParty: {
		cardmarket: 365685,
		tcgplayer: 178850
	}
}

export default card
