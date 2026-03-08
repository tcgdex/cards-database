import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Dragonite ex",
		fr: "Dracolosse ex",
		de: "Dragoran ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Call for Power",
				fr: "Appel à la puissance",
				de: "Call for Power"
			},
			effect: {
				en: "As often as you like during your turn, you may move an Energy card attached to 1 of your Pokémon to Dragonite ex. This power can't be used if Dragonite ex is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour, vous pouvez attacher à Dracolosse ex une carte Énergie attachée à un de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Dracolosse ex est affecté par un État spécial.",
				de: "As often as you like during your turn, you may mova an Energy card attached to 1 of your Pokémon to Dragonite ex. This power can't be used if Dragonite ex is affected by a Special Condition."
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
				en: "Dragon Wave",
				fr: "Vague de dragon",
				de: "Dragon Wave"
			},
			effect: {
				en: "Discard a Water Energy card and a Lightning Energy card attached to Dragonite ex.",
				fr: "Défaussez une carte Énergie  et une carte Énergie  attachée à Dracolosse ex.",
				de: "Discard a  Energy card and a  card attached to Dragonite ex."
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
				en: "Giant Tail",
				fr: "Longue queue",
				de: "Giant Tail"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Flip a coin. If tails, this attack does nothing."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
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

	thirdParty: {
		tcgplayer: 84918,
		cardmarket: 275967
	}
}

export default card
