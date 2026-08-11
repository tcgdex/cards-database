import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [859],
	set: Set,

	name: {
		'en-us': "Marnie's Impidimp",
		'fr-fr': "Grimalin de Rosemary",
		'de-de': "Marys Bähmon",
		'it-it': "Impidimp di Mary",
		'es-es': "Impidimp de Roxy",
		'pt-br': "Impidimp da Marine",
		'es-mx': "Impidimp de Marnie"
	},


	illustrator: "KEIICHIRO ITO",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Filch",
			'fr-fr': "Maraudage",
			'de-de': "Mopsen",
			'it-it': "Furtarello",
			'es-es': "Birlar",
			'pt-br': "Furtar",
			'es-mx': "Hurtar"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'es-es': "Roba 1 carta.",
			'pt-br': "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'de-de': "Korkenzieherhieb",
			'it-it': "Pugno Rotante",
			'es-es': "Puño Tirabuzón",
			'pt-br': "Soco Saca-rolha",
			'es-mx': "Puño Sacacorchos"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826008,
				tcgplayer: 632942
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826008,
				tcgplayer: 632942
			}
		},
	],
}

export default card
