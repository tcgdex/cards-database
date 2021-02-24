import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
	},
	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		247,
	],
	hp: 70,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hard Shell Evolution",
				fr: "Évolution Carapadure",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may prevent all damage done to this Pokémon by your opponent's attacks until the end of your opponent's next turn.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez éviter tous les dégâts infligés à ce Pokémon par les attaques de votre adversaire jusqu’à la fin du prochain tour de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
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

	retreat: 3,



}

export default card
