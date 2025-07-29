import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Pidgey",
		fr: "Roucool"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		16,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				fr: "Lancez 1 pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277477
	}
}

export default card
