import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		50,
	],
	hp: 50,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez un Pokémon de base dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
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
	retreat: 1,



}

export default card
