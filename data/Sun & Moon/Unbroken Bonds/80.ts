import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		678,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Caturday",
				fr: "Chamedi",
			},
			effect: {
				en: "Draw 3 cards. If you do, this Pokémon is now Asleep.",
				fr: "Piochez 3 cartes. Dans ce cas, ce Pokémon est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Perplexing Eyes",
				fr: "Regard Déroutant",
			},
			effect: {
				en: "The Defending Pokémon's Weakness is now Psychic until the end of your next turn. (The amount of Weakness doesn't change.)",
				fr: "La Faiblesse du Pokémon Défenseur est maintenant de type Psychic jusqu’à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
