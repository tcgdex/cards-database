import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},
	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		171,
	],
	hp: 110,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blinking Lights",
				fr: "Lumières Clignotantes",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may look at the top card of your opponent's deck.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez regarder la carte du dessus du deck de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Swirling Flow",
				fr: "Flot Tourbillon",
			},
			effect: {
				en: "You may have your opponent shuffle their deck.",
				fr: "Vous pouvez demander à votre adversaire de mélanger son deck.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
