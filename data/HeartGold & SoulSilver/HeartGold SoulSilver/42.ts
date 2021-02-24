import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Flaaffy",
		fr: "Lainergie",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		180,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Spear",
				fr: "Lance-éclair",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thundershock",
				fr: "Éclair",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
