import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Hippodocus",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	stage: "Stage1",
	evolveFrom: {
		fr: "Hippopotas",
	},
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Projection de Tornades",
			},
			damage: "80",
			effect: {
				fr: "Si vous avez joué Taragon de votre main pendant ce tour, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			},
		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Gros Impact",
			},
			damage: "130",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "J",
	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 877454
	}
}

export default card
