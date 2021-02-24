import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Latias ◇",
		fr: "Latias ",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 130,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dreamy Mist",
				fr: "Brume Onirique",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to each of your Basic Benched Dragon Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à chacun des Pokémon Dragon de base sur votre Banc.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
