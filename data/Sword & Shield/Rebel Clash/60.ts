import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Shinx",
		fr: "Lixy"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Under Pressure",
				fr: "Sous Pression"
			},
			effect: {
				en: "If your opponent has 3 or fewer Prize cards remaining, this attack does 50 more damage.",
				fr: "S’il reste 3 cartes Récompense ou moins à votre adversaire, cette attaque inflige 50 dégâts supplémentaires."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Lightning"]
}

export default card
