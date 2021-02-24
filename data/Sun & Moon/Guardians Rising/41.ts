import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
	},
	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		75,
	],
	hp: 110,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder Punch",
				fr: "Poing-Éclair",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires. Si c’est pile, ce Pokémon s’inflige 20 dégâts.",
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electrobullet",
				fr: "Électrojectile",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 80,

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
	retreat: 4,



}

export default card
