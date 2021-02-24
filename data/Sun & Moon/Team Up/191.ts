import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Eevee & Snorlax-GX",
		fr: "Évoli et Ronflex-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 270,
	types: [
		"Colorless",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cheer Up",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "Attach an Energy card from your hand to 1 of your Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dump Truck Press",
				fr: "Courage !",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 120 more damage.",
				fr: "Attachez une carte Énergie de votre main à l’un de vos Pokémon.",
			},
			damage: 120,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Megaton Friends-GX",
				fr: "Pression Poids Lourd",
			},
			effect: {
				en: "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), draw cards until you have 10 cards in your hand. (You can't use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 120 dégâts supplémentaires.",
			},
			damage: 210,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Amis Mégatonnes-GX",
			},
			effect: {
				fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), piochez jusqu’à avoir 10 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 210,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
