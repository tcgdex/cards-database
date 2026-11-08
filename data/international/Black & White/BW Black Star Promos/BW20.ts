import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Serperior",
		'fr-fr': "Majaspic",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		497,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		'en-us': "Servine",
		'fr-fr': "Lianaja",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Royal Heal",
			},
			effect: {
				'en-us': "At any time between turns, heal 10 damage from each of your Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Tornado",
				'fr-fr': "Phytomixeur",
			},
			effect: {
				'en-us': "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant d’Énergies Grass attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
			},
			damage: 60,

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
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "They raise their heads to intimidate opponents but only give their all when fighting a powerful opponent.",
	},
}

export default card
