import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Aron",
		fr: "Galekid",
		de: "Stollunior"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		304,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steel Tackle",
				fr: "Charge d'acier",
				de: "Stahltackle"
			},
			effect: {
				en: "Aron does 10 damage to itself.",
				fr: "Galekid s'inflige 10 dégâts.",
				de: "Stollunior fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	description: {
		fr: "Il vit habituellement au cœur des montagnes. Affamé, il dévore parfois des rails et des voitures."
	},

	thirdParty: {
		cardmarket: 277700,
		tcgplayer: 83636
	}
}

export default card
