import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Comfey",
		fr: "Guérilande",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		764,
	],
	hp: 70,
	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flower Shield",
				fr: "Garde Florale",
			},
			effect: {
				en: "Each of your Pokémon that has any Fairy Energy attached to it can't be affected by any Special Conditions. Remove any Special Conditions affecting those Pokémon.",
				fr: "Aucun de vos Pokémon auquel de l’Énergie Fairy est attachée ne peut être affecté par des États Spéciaux. Retirez tous les États Spéciaux affectant ces Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Sweet Kiss",
				fr: "Doux Baiser",
			},
			effect: {
				en: "Your opponent draws a card.",
				fr: "Votre adversaire pioche une carte.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
