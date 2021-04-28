import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Tsareena-GX",
		fr: "Sucreine-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		763,
	],
	hp: 230,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Steenee",
		fr: "Candine",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Side Eye",
				fr: "Regard de Travers",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jumping Side Kick",
				fr: "Coup Latéral Sauté",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Confused, this attack does 90 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 90,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Queen's Command-GX",
				fr: "Ordre de la Reine-GX",
			},
			effect: {
				en: "Your opponent discards 4 cards from their hand. (You can't use more than 1 GX attack in a game.)",
				fr: "Votre adversaire défausse 4 cartes de sa main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
