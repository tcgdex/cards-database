import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Minun",
		fr: "Negapi",
	},
	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		312,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 Pokémon de Base Lightning et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Trash Charge",
				fr: "Charge d'ordures",
			},
			effect: {
				en: "Search your discard pile for a Lightning Energy card and attach it to 1 of your Pokémon.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie Lightning et attachez-la à 1 de vos Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
