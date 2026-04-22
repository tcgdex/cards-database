import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Swampert",
		fr: "Laggron",
		de: "Sumpex"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		260,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Water Cyclone",
				fr: "Cyclone d'O",
				de: "Water Cyclone"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Water Energy attached to 1 of your Active Pokémon to 1 of your Benched Pokémon. This power can't be used if Swampert is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer 1 Énergie  d'1 de vos Pokémon Actifs à 1 de vos Pokémon de Banc. Ce pouvoir ne peut pas être utilisé si Laggron est affecté par un État Spécial.",
				de: "As often you like during your turn (before your attack), you may move a  Energy attached to 1 of your Active Pokémon to 1 of your Benched Pokémon. This power can't be used if Swampert is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spinning Tail",
				fr: "Queue tournante",
				de: "Spinning Tail"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Sonic",
				fr: "Aquasonique",
				de: "Aqua Sonic"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "This attack's damage isn't affected by Resistance."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 97731,
		cardmarket: 276522
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal"
		},
	]
}

export default card
