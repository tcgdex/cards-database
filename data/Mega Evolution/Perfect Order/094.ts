import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Mélofée",
	},
	set: Set,
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				fr: "Par Ici",
			},
			effect: {
				fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			},
		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				fr: "Flop",
			},
			damage: "30",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Cona Nitanda",

	thirdParty: {
		cardmarket: 877511
	}
}

export default card
