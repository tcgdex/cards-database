import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Hoopa",
		fr: "Hoopa",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		720,
	],
	hp: 130,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Evil Admonition",
				fr: "Réprimande Maléfique",
			},
			effect: {
				en: "This attack does 20 more damage for each of your opponent's Pokémon that has an Ability.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de votre adversaire ayant un talent.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Shock",
				fr: "Choc Cérébral",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
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
