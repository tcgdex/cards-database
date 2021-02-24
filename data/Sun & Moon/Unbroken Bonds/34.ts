import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Wartortle",
		fr: "Carabaffe",
	},
	illustrator: "Hiroki Asanuma",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		8,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Shell",
				fr: "Coquille Dure",
			},
			effect: {
				en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Aqua Slash",
				fr: "Aqua Slash",
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
