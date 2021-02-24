import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		185,
	],
	hp: 100,
	types: [
		"Fightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Roadblock",
				fr: "Barrage Routier",
			},
			effect: {
				en: "Your opponent can't have more than 4 Benched Pokémon. If they have 5 or more Benched Pokémon, they discard Benched Pokémon until they have 4 Pokémon on the Bench. If more than one effect changes the number of Benched Pokémon allowed, use the smaller number.",
				fr: "Votre adversaire ne peut pas avoir plus de 4 Pokémon de Banc. S’il a 5 Pokémon de Banc ou plus, il doit défausser des Pokémon de Banc jusqu’à en avoir 4 sur le Banc. Si plus d’un effet change le nombre de Pokémon de Banc autorisés, utilisez le nombre le plus petit.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
