import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Jumpluff",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		189,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiploom",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Evolutionary Spore",
			},
			effect: {
				en: "Choose any number of your Hoppips and Skiplooms. Then, for each Pokémon you chose in this way, you may search your deck for a card that evolves from that Pokémon and attach it to that Pokémon. (This counts as evolving those Pokémon.) Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Solarbeam",
			},

			damage: 30,

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
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
