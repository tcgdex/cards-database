import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Teraclope",
		de: "Zwirrklop"
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
		fr: "Skelénox"
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
				fr: "Jugement",
				de: "Judgement"
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out.",
				fr: "Lancez deux pièces. Si ce sont deux faces, le Pokémon Défenseur est mis K.O.",
				de: "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out."
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
				fr: "Malédiction au pif",
				de: "Random Curse"
			},
			effect: {
				en: "Put a total of 5 damage counters on all Defending Pokémon in any way you like.",
				fr: "Placez comme vous le voulez un total de cinq marqueurs de dégât sur tout Pokémon Défenseur.",
				de: "Put a total of 5 damage counters on all Defending Pokémon in any way you like."
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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275781,
		tcgplayer: 85024
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
