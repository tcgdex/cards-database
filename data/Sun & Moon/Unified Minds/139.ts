import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Yveltal",
		fr: "Yveltal",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		717,
	],
	hp: 130,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Blow Through",
				fr: "Grosse Bourrasque",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 20 more damage.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Shadow Impact",
				fr: "Impact Lugubre",
			},
			effect: {
				en: "Put 3 damage counters on 1 of your Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur l’un de vos Pokémon.",
			},
			damage: 120,

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
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
