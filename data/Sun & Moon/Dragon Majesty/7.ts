import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Victini ◇",
		fr: "Victini ",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		494,
	],
	hp: 90,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Infinity",
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},
			effect: {
				en: "This attack does 20 damage for each basic Energy card in your discard pile. Then, shuffle those cards into your deck.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				fr: "Infinité",
			},
			effect: {
				fr: "Cette attaque inflige 20 dégâts pour chaque carte Énergie de base dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
