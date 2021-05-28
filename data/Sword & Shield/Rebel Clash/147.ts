import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Diggersby",
		fr: "Excavarenne"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mining Rush",
				fr: "Excavation Hâtive"
			},
			effect: {
				en: "Discard up to 6 cards from the top of your deck. If you do, this attack does 30 damage for each card you discarded in this way.",
				fr: "Défaussez jusqu’à 6 cartes du dessus de votre deck. Dans ce cas, cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon."
			},
			damage: "30×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt Bounce",
				fr: "Culbute Surprise"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 130,
	types: ["Colorless"],
	regulationMark: "D"
}

export default card
