import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Togekiss",
		fr: "Togekiss",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		468,
	],
	hp: 140,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fairy Feast",
				fr: "Festin Féérique",
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 30 damage from each of your Fairy Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à chacun de vos Pokémon Fairy.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
