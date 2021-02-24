import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Dive",
				fr: "Plongeon Rapide",
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Royal Blades",
				fr: "Lames Royales",
			},
			effect: {
				en: "If you played Cynthia from your hand during this turn, this attack does 100 more damage.",
				fr: "Si vous avez joué Cynthia de votre main pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
