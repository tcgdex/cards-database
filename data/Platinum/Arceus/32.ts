import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Spiritomb",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		442,
	],

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Keystone Seal",
			},
			effect: {
				en: "As long as Spiritomb is your Active Pokémon, each player can't play any Trainer cards from his or her hand.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Darkness Grace",
			},
			effect: {
				en: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) If you do, put 1 damage counter on Spiritomb. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Will-o'-the-wisp",
			},

			damage: 10,

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
