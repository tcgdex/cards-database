import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Espurr",
		fr: "Psystigri",
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		677,
	],
	hp: 60,
	types: [
		"Psychic",
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
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ear Kinesis",
				fr: "Oreille Kinésique",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon for each damage counter on that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire pour chaque marqueur de dégâts sur ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
