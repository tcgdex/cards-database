import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Sharpedo",
		'fr-fr': "Sharpedo de Team Aqua",
		'de-de': "Team Aquas Tohaido"
	},

	illustrator: "Katsura Tabata",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [319],

	hp: 70,

	types: [
		"Water",
		"Darkness"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Rage"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Team Aqua's Sharpedo.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Sharpedo de Team Aqua.",
				'de-de': "Does 10 damage plus 10 more damage for each damage counter on Team Aqua's Sharpedo."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Slash",
				'fr-fr': "Aqua-tranche",
				'de-de': "Aqua Slash"
			},
			effect: {
				'en-us': "Team Aqua's Sharpedo can't attack during your next turn.",
				'fr-fr': "Sharpedo de Team Aqua ne peut pas attaquer lors de votre prochain tour.",
				'de-de': "Team Aqua's Sharpedo can't attack during your next turn."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 0,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275782,
				tcgplayer: 89799
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275782,
				tcgplayer: 89799
			}
		},
	],

}

export default card
