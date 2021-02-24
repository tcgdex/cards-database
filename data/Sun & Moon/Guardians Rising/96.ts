import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Goodra",
		fr: "Muplodocus",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		706,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Whip",
				fr: "Mégafouet",
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to this Pokémon to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à ce Pokémon à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Beat Slider",
				fr: "Frappe Glissante",
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
