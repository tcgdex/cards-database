import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spike Draw",
			'fr-fr': "Pique-Pioche",
			'es-es': "Robo Pico",
			'it-it': "Battipesca",
			'pt-br': "Comprada Espinhosa",
			'de-de': "Stachelzug"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'de-de': "Ziehe 1 Karte."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Mega Punch",
			'fr-fr': "Ultimapoing",
			'es-es': "Megapuño",
			'it-it': "Megapugno",
			'pt-br': "Megassoco",
			'de-de': "Megahieb"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794517,
				tcgplayer: 590060
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794517,
				tcgplayer: 590060
			}
		},
	],

	illustrator: "Ounishi",

}

export default card
