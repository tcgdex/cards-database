import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Dark Blastoise",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wartortle",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Hydrocannon",
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each W Energy attached to Dark Blastoise but not used to pay for this attack. You can't add more than 40 damage in this way.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rocket Tackle",
			},
			effect: {
				en: "Dark Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Dark Blastoise during your opponent's next turn. (Any other effects of attacks still happen.)",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
