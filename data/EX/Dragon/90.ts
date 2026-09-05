import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Dragonite ex",
		fr: "Dracolosse ex",
		de: "Dragoran-ex"
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
		en: "Dragonair",
		fr: "Draco",
		de: "Dragonir"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Call for Power",
				fr: "Appel à la puissance",
				de: "Kraftruf"
			},
			effect: {
				en: "As often as you like during your turn, you may move an Energy card attached to 1 of your Pokémon to Dragonite ex. This power can't be used if Dragonite ex is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour, vous pouvez attacher à Dracolosse ex une carte Énergie attachée à un de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Dracolosse ex est affecté par un État spécial.",
				de: "Du kannst in deinem Zug so oft wie du willst eine an 1 deiner Pokémon angelegte Energiekarte an Dragoran ex anlegen. Diese Poké-Power kann nicht verwendet werden, falls Dragoran ex von einem Speziellen Zustand betroffen ist."
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
				de: "Drachenwelle"
			},
			effect: {
				en: "Discard a Water Energy card and a Lightning Energy card attached to Dragonite ex.",
				fr: "Défaussez une carte Énergie {W} et une carte Énergie {L} attachée à Dracolosse ex.",
				de: "Entferne 1 {W}-Energiekarte und 1 {L}-Energiekarte, die an Dragoran ex angelegt sind, und lege sie auf deinen Ablagestapel."
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
				de: "Riesenschweif"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
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
