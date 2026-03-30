import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Baojian",
	},
	set: Set,
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				fr: "Bombarder",
			},
			damage: "20",
			effect: {
				fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			},
		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				fr: "Lame Ascendante",
			},
			damage: "80+",
			effect: {
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 80 dégâts supplémentaires.",
			},
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Satoshi Ito",

	thirdParty: {
		cardmarket: 877470
	}
}

export default card
