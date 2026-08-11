import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Dusclops",
		'fr-fr': "Teraclope",
		'de-de': "Zwirrklop"
	},

	illustrator: "Tomoko Wakai",
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
		'en-us': "Duskull",
		'fr-fr': "Skelenox"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psychic Removal",
				'fr-fr': "Psycho-suppression",
				'de-de': "Psychic Removal"
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez 2 pièces. Si ce sont deux faces, défaussez toutes les Énergies attachées au Pokémon Défenseur.",
				'de-de': "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Powerful Hand",
				'fr-fr': "Main puissante",
				'de-de': "Powerful Hand."
			},
			effect: {
				'en-us': "Count the number of cards in your hand. Put that many damage counters on the Defending Pokémon. You can't put more than 7 damage counters in this way.",
				'fr-fr': "Comptez le nombre de cartes que vous avez en main. Placez autant de marqueurs de dégât que vous avez de cartes sur le Pokémon Défenseur. Vous ne pouvez pas placer plus de 7 marqueurs de dégât de cette façon.",
				'de-de': "Count the number of cards in your hand. Put that many damage counters on the Defending Pokémon. You can't put more than 7 damage counters in this way."
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
				tcgplayer: 85025,
				cardmarket: 276410
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85025,
				cardmarket: 276410
			},
		},
	],

}

export default card
