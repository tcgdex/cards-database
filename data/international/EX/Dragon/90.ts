import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Dragonite ex",
		'fr-fr': "Dracolosse ex",
		'de-de': "Dragoran ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [149],

	hp: 150,

	stage: "Basic",
	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Call for Power",
				'fr-fr': "Appel à la puissance",
				'de-de': "Call for Power"
			},
			effect: {
				'en-us': "As often as you like during your turn, you may move an Energy card attached to 1 of your Pokémon to Dragonite ex. This power can't be used if Dragonite ex is affected by a Special Condition.",
				'fr-fr': "Autant de fois que vous le voulez lors de votre tour, vous pouvez attacher à Dracolosse ex une carte Énergie attachée à un de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Dracolosse ex est affecté par un État spécial.",
				'de-de': "As often as you like during your turn, you may mova an Energy card attached to 1 of your Pokémon to Dragonite ex. This power can't be used if Dragonite ex is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				'en-us': "Dragon Wave",
				'fr-fr': "Vague de dragon",
				'de-de': "Dragon Wave"
			},
			effect: {
				'en-us': "Discard a Water Energy card and a Lightning Energy card attached to Dragonite ex.",
				'fr-fr': "Défaussez une carte Énergie  et une carte Énergie  attachée à Dracolosse ex.",
				'de-de': "Discard a  Energy card and a  card attached to Dragonite ex."
			},
			damage: 70,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giant Tail",
				'fr-fr': "Longue queue",
				'de-de': "Giant Tail"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84918,
				cardmarket: 275967
			},
		},
	],

}

export default card
