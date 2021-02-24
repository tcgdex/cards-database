import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Charizard G",
		fr: "Dracaufeu ",
	},
	illustrator: "Wataru Kawahara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "LEVEL-UP",
	suffix: "SP",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Call for Power",
				fr: "Appel à la puissance",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move an Energy attached to 1 of your Pokémon to Charizard G. This power can't be used if Charizard G is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie attachée à 1 de vos Pokémon sur Dracaufeu . Ce pouvoir ne peut pas être utilisé si Dracaufeu  est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Malevolent Fire",
				fr: "Feu malveillant",
			},
			effect: {
				en: "Flip a coin. If tails, discard all Energy attached to Charizard G.",
				fr: "Lancez une pièce. Si c'est pile, défaussez toutes les Énergies attachées à Dracaufeu .",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
