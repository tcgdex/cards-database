import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Drascore",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	stage: "Stage1",
	evolveFrom: {
		fr: "Rapion",
	},
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				fr: "Réduire en Poussière",
			},
			damage: "60",
		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				fr: "Queue Nocive",
			},
			damage: "100",
			effect: {
				fr: "Ce Pokémon s'inflige aussi 70 dégâts. Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Nelnal",

	thirdParty: {
		cardmarket: 877468
	}
}

export default card
