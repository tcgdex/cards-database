import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Slakoth",
		fr: "Parecool",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		287,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Slakoth.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Parecool.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slack Off",
				fr: "Paresse",
			},
			effect: {
				en: "Remove all damage counters from Slakoth. Slakoth can't attack during your next turn.",
				fr: "Retirez à Parecool tous ses marqueurs de dégât. Parecool ne peut pas attaquer lors de votre prochain tour.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
