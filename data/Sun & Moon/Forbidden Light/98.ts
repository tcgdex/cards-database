import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Diggersby",
		fr: "Excavarenne",
	},
	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		660,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mountaintop Mining",
				fr: "Mine des Sommets",
			},
			effect: {
				en: "You may do 40 more damage. If you do, discard the top 2 cards of your deck.",
				fr: "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, défaussez les 2 cartes du dessus de votre deck.",
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Cannon",
				fr: "Canon à Pierres",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 80 damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
