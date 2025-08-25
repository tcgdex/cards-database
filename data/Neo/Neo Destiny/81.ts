import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Seel",
		fr: "Otaria",
		de: "Jurob"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		86,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Take Down"
			},
			effect: {
				en: "Seel does 10 damage to itself.",
				fr: "Otaria s'inflige 10 dégâts.",
				de: "Seel does 10 damage to itself."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Bien que peu doué pour marcher sur la terre ferme, il se déplace avec aisance dans ses eaux natales de l'Arctique."
	},

	thirdParty: {
		cardmarket: 274733,
		tcgplayer: 89048
	}
}

export default card
