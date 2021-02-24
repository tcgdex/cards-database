import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		584,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Hail",
				fr: "Grêle",
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Frozen Breath",
				fr: "Souffle Gelé",
			},
			effect: {
				en: "You may discard 2 Water Energy from this Pokémon. If you do, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Vous pouvez défausser 2 Énergies Water attachées à ce Pokémon. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
