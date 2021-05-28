import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Électhor"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drill Peck",
				fr: "Bec Vrille"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Snipe",
				fr: "Tir Éclair"
			},
			effect: {
				en: "Discard all Energy from this Pokémon, and this attack does 160 damage to 1 of your opponent’s Pokémon V or Pokémon-GX. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez toute l’Énergie de ce Pokémon. Cette attaque inflige 160 dégâts à l’un des Pokémon-V ou Pokémon-GX de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
