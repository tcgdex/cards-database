import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Banette",
		'fr-fr': "Branette",
		'de-de': "Banette"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [354],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Shadow Steal",
				'fr-fr': "Vol d'ombre",
				'de-de': "Shadow Steal"
			},
			effect: {
				'en-us': "Does 10 damage plus 20 more damage for each Special Energy card in your opponent's discard pile.",
				'fr-fr': "Inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie Spéciale dans la pile de défausse de votre adversaire.",
				'de-de': "Does 10 damage plus 20 more damage for each Special Energy card in your opponent's discard pile."
			},
			damage: "10+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Darkness Chant",
				'fr-fr': "Chant d'obscurité",
				'de-de': "Darkness Chant"
			},
			effect: {
				'en-us': "Count the number of Basic Pokémon or Evolution cards in your discard pile. Put that many damage counters on the Defending Pokémon. You can't put more than 6 damage counters on the Defending Pokémon in this way.",
				'fr-fr': "Comptez le nombre de Pokémon de base ou de cartes Évolution dans votre pile de défausse. Placez autant de marqueurs de dégât sur le Pokémon Défenseur. Vous ne pouvez pas placer plus de 6 marqueurs de dégât sur le Pokémon Défenseur de cette façon.",
				'de-de': "Count the number of Basic Pokémon or Evolution cards in your discard pile. Put that many damage counters on the Defending Pokémon. You can't put more that 6 damage counters on the Defending Pokémon in this way."
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
				tcgplayer: 83719,
				cardmarket: 276075
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 83719,
				cardmarket: 276075
			}
		},
	]
}

export default card
