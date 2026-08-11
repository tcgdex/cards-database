import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [509],
	set: Set,

	name: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'de-de': "Felilou"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Cat Kick",
			'fr-fr': "Coup d'Patte",
			'es-es': "Patada Gato",
			'it-it': "Calciogatto",
			'pt-br': "Chute do Gato",
			'de-de': "Katzenkick"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Opponents that get drawn in by its adorable behavior come away with stinging scratches from its claws and stinging pride from its laughter.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740635,
				tcgplayer: 523788,
				cardtrader: 265226
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740635,
				tcgplayer: 523788,
				cardtrader: 265226
			}
		},
	],

	illustrator: "0313",

	
}

export default card
