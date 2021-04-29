import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Solgaleo-GX",
		fr: "Solgaleo-GX",
	},
	illustrator: "PLANETA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		791,
	],
	hp: 250,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	stage: "Stage2",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shining Mane",
				fr: "Crinière Étincelante",
			},
			effect: {
				en: "Your Pokémon in play have no Weakness.",
				fr: "Vos Pokémon en jeu n’ont pas de Faiblesse.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Turbo Strike",
				fr: "Frappe Turbo",
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
			},
			damage: 120,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Prominence GX",
				fr: "Proéminence-GX",
			},
			effect: {
				en: "Heal all damage from all of your Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
