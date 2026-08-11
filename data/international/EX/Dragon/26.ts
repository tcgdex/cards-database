import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'de-de': "Dratini"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [147],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Dragon Dew",
				'fr-fr': "Goutte de dragon",
				'de-de': "Drachentau"
			},
			effect: {
				'en-us': "Remove 2 damage counters from 1 of your Pokémon (remove 1 if there is only 1).",
				'fr-fr': "Retirez deux marqueurs de dégât à un de vos Pokémon (ou un s'il n'y en a qu'un).",
				'de-de': "Entferne 2 Schadensmarken von einem deiner Pokémon (1 falls nur 1 vorhanden)."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Tail Slap",
				'fr-fr': "Coud'keu",
				'de-de': "Schweifschlag"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84932,
				cardmarket: 275903
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84932,
				cardmarket: 275903
			},
		},
	],

}

export default card
