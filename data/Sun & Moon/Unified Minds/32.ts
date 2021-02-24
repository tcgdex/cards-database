import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Talonflame",
		fr: "Flambusard",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		663,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Heat Wave",
				fr: "Canicule",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Raid",
				fr: "Raid Flamboyant",
			},
			effect: {
				en: "Discard an Energy from this Pokémon. This attack does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez une Énergie de ce Pokémon. Cette attaque inflige 50 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
