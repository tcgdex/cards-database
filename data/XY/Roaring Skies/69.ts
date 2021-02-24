import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		227,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blow Through",
				fr: "Grosse Bourrasque",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 30 more damage.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
