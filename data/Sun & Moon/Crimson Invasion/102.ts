import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Alolan Golem-GX",
		fr: "Grolem d’Alola-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		76,
	],
	hp: 250,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
			},

			damage: 80,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Electromagnetic Tackle",
				fr: "Super Charge Électromagnétique",
			},
			effect: {
				en: "This Pokémon does 50 damage to itself.",
				fr: "Ce Pokémon s’inflige 50 dégâts.",
			},
			damage: 200,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Rock-GX",
				fr: "Lourd Rocher-GX",
			},
			effect: {
				en: "Your opponent can't play any cards from their hand during their next turn. (You can't use more than 1 GX attack in a game.)",
				fr: "Votre adversaire ne peut pas jouer de carte de sa main pendant son prochain tour. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
