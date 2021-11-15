import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Ludicolo δ",
		fr: "Ludicolo δ"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		272,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Lombre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Overzealous",
				fr: "Excès de zèle"
			},
			effect: {
				en: "If your opponent has any Pokémon-ex in play, each of Ludicolo's attacks does 30 more damage to the Defending Pokémon.",
				fr: "Si votre adversaire possède des Pokémon-ex en jeu, chacune des attaques de Ludicolo inflige 30 dégâts supplémentaires au Pokémon Défenseur."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Punch",
				fr: "Poing de feu"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
