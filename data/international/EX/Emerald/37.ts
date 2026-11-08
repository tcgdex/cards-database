import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Minun",
		'fr-fr': "Negapi",
		'de-de': "Minun"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		312,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Electro-guard",
				'fr-fr': "Electro-protection",
				'de-de': "Electro-guard"
			},
			effect: {
				'en-us': "As long as Minun has any Lightning Energy is attached to it, Minun has no Weakness.",
				'fr-fr': "Tant que Negapi possède une Énergie , il n'a pas de Faiblesse.",
				'de-de': "As long as Minun has any  Energy attached to it, Minun has no Weakness."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Quick Attack"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 87485,
		cardmarket: 276548
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87485,
				cardmarket: 276548
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87485,
				cardmarket: 276548
			},
		}
	],
}

export default card
