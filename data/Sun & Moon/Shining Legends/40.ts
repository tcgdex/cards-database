import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Shining Mew",
		fr: "Mew Brillant",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 30,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Legendary Guidance",
				fr: "Conseil Légendaire",
			},
			effect: {
				en: "Search your deck for up to 2 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes Énergie dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Beam",
				fr: "Rayon",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
