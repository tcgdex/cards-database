import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Zygarde-GX",
		fr: "Zygarde-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 200,
	types: [
		"Fightning",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cell Connector",
				fr: "Connecteur de Cellules",
			},
			effect: {
				en: "Attach 2 Fighting Energy cards from your discard pile to this Pokémon.",
				fr: "Attachez 2 cartes Énergie Fighting de votre pile de défausse à ce Pokémon.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Land's Wrath",
				fr: "Force Chtonienne",
			},

			damage: 130,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Verdict-GX",
				fr: "Verdict-GX",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from Pokémon-GX and Pokémon-EX during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-GX et de Pokémon-EX pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 150,

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
