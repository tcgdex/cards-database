import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Rapion",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				fr: "Direct Toxik",
			},
			damage: "20",
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Aya Kusube",

	thirdParty: {
		cardmarket: 877467
	}
}

export default card
