import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		111,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leer",
				fr: "Groz'yeux"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack Rhyhorn during your opponent's next turn. (Benching either Pokémon ends this effect.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer Rhinocorne pendant le prochain tour de votre adversaire. (Si l'un des deux Pokémon bat en retraite, cet effet prend fin.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud'korne"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Avec une ossature 1000 fois plus résistante que celle de l'homme, ses charges sont dévastatrices."
	}
}

export default card
