import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'de-de': "Meditalis"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [308],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Meditikka"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Steady Punch",
				'fr-fr': "Poing énergétique",
				'de-de': "Steady Punch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Power Heal",
				'fr-fr': "Pouvoir guérisseur",
				'de-de': "Power Heal"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Medicham. After doing damage, remove 1 damage counter from Medicham.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Charmina. Après avoir infligé des dégâts, retirez à Charmina 1 marqueur de dégât.",
				'de-de': "Does 10 damage plus 10 more damage for each damage counter on Medicham. After doing damage, remove 1 damage counter from Madicham."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87272,
				cardmarket: 276116
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87272,
				cardmarket: 276116
			}
		},
	]
}

export default card
