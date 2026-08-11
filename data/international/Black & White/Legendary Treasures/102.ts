import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Lugia-EX",
	},

	illustrator: "Toyste Beach",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 180,

	types: [
		"Colorless",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Overflow",
			},
			effect: {
				'en-us': "If your opponent’s Pokémon is Knocked Out by damage from an attack of this Pokémon, take 1 more Prize card.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Plasma Gale",
			},
			effect: {
				'en-us': "Discard a Plasma Energy attached to this Pokémon. If you can't discard a Plasma Energy, this attack does nothing.",
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

	thirdParty: {
		cardmarket: 281253
	}
}

export default card
