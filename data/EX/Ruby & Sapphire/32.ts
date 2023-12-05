import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Grovyle",
		fr: "Massko",
		de: "Reptain"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		253,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Treecko",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Natural Cure",
				fr: "Remède naturel",
				de: "Innere Kraft"
			},
			effect: {
				en: "When you attach a Grass Energy card from your hand to Grovyle, remove all Special Conditions from Grovyle.",
				fr: "Lorsque vous attachez une carte Énergie  de votre main à Massko, retirez-lui tous ses États Spéciaux.",
				de: "Wenn du eine -Energiekarte von der Hand an Reptain anlegst, verlieren alle Speziellen Zustände auf Reptain ihre Wirkung."
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
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
