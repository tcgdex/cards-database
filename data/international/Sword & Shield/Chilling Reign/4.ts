import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [165],
	set: Set,

	name: {
		'en-us': "Ledyba",
		'fr-fr': "Coxy",
		'es-es': "Ledyba",
		'it-it': "Ledyba",
		'pt-br': "Ledyba",
		'de-de': "Ledyba"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'de-de': "Sammeln"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre 1 carta.",
			'de-de': "Ziehe 1 Karte."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Punch",
			'fr-fr': "Koud'Poing",
			'es-es': "Puño",
			'it-it': "Pugno",
			'pt-br': "Soco",
			'de-de': "Boxhieb"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "These very cowardly Pokémon join together and use Reflect to protect their nest."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567084,
				tcgplayer: 241651
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567084,
				tcgplayer: 241651
			}
		},
	],
}

export default card
