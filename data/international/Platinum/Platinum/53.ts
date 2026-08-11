import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'de-de': "Lucario"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [448],

	hp: 90,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Aura Sphere",
				'fr-fr': "Aurasphère",
				'de-de': "Aura Sphere"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Does 10 damage to 1 of your opponent's benched Pokémon. (Don't apply Weakness and Resistance for benched Pokémon.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Do the Wave",
				'fr-fr': "Faites la vague",
				'de-de': "Do the Wave"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each of your Benched Pokémon.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon de votre Banc.",
				'de-de': "Does 20 damage plus 10 more damage for each of your Benched Pokémon."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	description: {
		'en-us': "A well-trained one can sense auras to identify and take in the feelings of creatures over half a mile away."
	},

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86878,
				cardmarket: 278474
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278474,
				tcgplayer: 86878
			}
		},
		{
			type:"normal",
			stamp: ["pre-release"],
			thirdParty: {
				tcgplayer: 187215
			}
		},
		{
			type:"normal",
			stamp: ["pre-release","staff"],
			thirdParty: {
				tcgplayer: 187216
			}
		}
	],

	retreat: 0
}

export default card
