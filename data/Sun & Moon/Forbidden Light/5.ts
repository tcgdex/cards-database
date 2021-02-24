import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
	},
	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		664,
	],
	hp: 30,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Abnormal Outbreak",
				fr: "Effusion Paradoxale",
			},
			effect: {
				en: "You can use this Ability only if you go second. Once during your first turn (before your attack), you may search your deck for a Spewpa and a Vivillon, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Vous ne pouvez utiliser ce talent que si vous jouez en second. Une seule fois pendant votre premier tour (avant votre attaque), vous pouvez chercher un Pérégrain et un Prismillon dans votre deck, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
