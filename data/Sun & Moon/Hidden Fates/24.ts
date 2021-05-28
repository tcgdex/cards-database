import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Électhor",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		145,
	],
	hp: 120,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Call",
				fr: "Appel à l’Ouragan",
			},
			effect: {
				en: "Flip 4 coins. For each heads, search your deck for a Lightning Energy card and attach it to 1 of your Pokémon-GX or Pokémon-EX. Then, shuffle your deck.",
				fr: "Lancez 4 pièces. Pour chaque côté face, cherchez une carte Énergie Lightning dans votre deck et attachez-la à l’un de vos Pokémon-GX ou Pokémon-EX. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Sky-High Claws",
				fr: "Griffes Gratte-Ciel",
			},

			damage: 100,

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
