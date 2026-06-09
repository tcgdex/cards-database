import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Teraclope",
		de: "Zwirrklop"
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
		en: "Duskull",
		fr: "Skelenox"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Removal",
				fr: "Psycho-suppression",
				de: "Psychic Removal"
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
				fr: "Lancez 2 pièces. Si ce sont deux faces, défaussez toutes les Énergies attachées au Pokémon Défenseur.",
				de: "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon."
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
				en: "Powerful Hand",
				fr: "Main puissante",
				de: "Powerful Hand."
			},
			effect: {
				en: "Count the number of cards in your hand. Put that many damage counters on the Defending Pokémon. You can't put more than 7 damage counters in this way.",
				fr: "Comptez le nombre de cartes que vous avez en main. Placez autant de marqueurs de dégât que vous avez de cartes sur le Pokémon Défenseur. Vous ne pouvez pas placer plus de 7 marqueurs de dégât de cette façon.",
				de: "Count the number of cards in your hand. Put that many damage counters on the Defending Pokémon. You can't put more than 7 damage counters in this way."
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
		tcgplayer: 85025,
		cardmarket: 276410
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
