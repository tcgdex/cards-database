import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Kommo-o-GX",
		fr: "Ékaïser-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		784,
	],
	hp: 240,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Adamantine Press",
				fr: "Charge Adamantine",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 130,

		},
		{
			cost: [
				"Lightning",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ultra Uppercut-GX",
				fr: "Ultra Uppercut-GX",
			},
			effect: {
				en: "(You can't use more than 1 GX attack in a game.)",
				fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 240,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
