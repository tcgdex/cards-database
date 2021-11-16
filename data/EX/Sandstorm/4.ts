import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Teraclope"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		356,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Duskull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Judgement",
				fr: "Jugement"
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out.",
				fr: "Lancez deux pièces. Si ce sont deux faces, le Pokémon Défenseur est mis K.O."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Random Curse",
				fr: "Malédiction au pif"
			},
			effect: {
				en: "Put a total of 5 damage counters on all Defending Pokémon in any way you like.",
				fr: "Placez comme vous le voulez un total de cinq marqueurs de dégât sur tout Pokémon Défenseur."
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
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
