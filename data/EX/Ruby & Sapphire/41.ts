import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Marshtomp",
		fr: "Flobio"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		259,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Mudkip",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Natural Cure",
				fr: "Remède naturel"
			},
			effect: {
				en: "When you attach a Water Energy from your hand to Marshtomp, remove all Special Conditions from Marshtomp.",
				fr: "Lorsque vous attachez une carte Énergie  de votre main à Flobio, retirez-lui tous ses États Spéciaux."
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
				en: "Aqua Sonic",
				fr: "Aquasonique"
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
