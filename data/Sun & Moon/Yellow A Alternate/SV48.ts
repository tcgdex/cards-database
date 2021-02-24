import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Golisopod-GX",
		fr: "Sarmuraï-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		768,
	],
	hp: 210,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Wimpod",
		fr: "Sovkipou",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "First Impression",
				fr: "Escarmouche",
			},
			effect: {
				en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 90 more damage.",
				fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Armor Press",
				fr: "Pression Cuirassée",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 100,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crossing Cut-GX",
				fr: "Coupe Croisée-GX",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
