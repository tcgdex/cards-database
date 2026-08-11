import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Dusclops",
		'fr-fr': "Teraclope",
		'de-de': "Zwirrklop"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [356],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Judgement",
				'fr-fr': "Jugement",
				'de-de': "Judgement"
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out.",
				'fr-fr': "Lancez deux pièces. Si ce sont deux faces, le Pokémon Défenseur est mis K.O.",
				'de-de': "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Random Curse",
				'fr-fr': "Malédiction au pif",
				'de-de': "Random Curse"
			},
			effect: {
				'en-us': "Put a total of 5 damage counters on all Defending Pokémon in any way you like.",
				'fr-fr': "Placez comme vous le voulez un total de cinq marqueurs de dégât sur tout Pokémon Défenseur.",
				'de-de': "Put a total of 5 damage counters on all Defending Pokémon in any way you like."
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


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275781,
				tcgplayer: 85024
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275781,
				tcgplayer: 85024
			}
		},
	],

}

export default card
