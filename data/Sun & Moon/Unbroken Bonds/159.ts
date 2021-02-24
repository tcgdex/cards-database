import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Glameow",
		fr: "Chaglam",
	},
	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		431,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Caturday",
				fr: "Chamedi",
			},
			effect: {
				en: "Draw a card. If you do, this Pokémon is now Asleep.",
				fr: "Piochez une carte. Dans ce cas, ce Pokémon est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Boing Boing Tail",
				fr: "Queue Ressort",
			},
			effect: {
				en: "This attack does 60 damage to 1 of your opponent's Pokémon-GX or Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon-GX ou Pokémon-EX de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
