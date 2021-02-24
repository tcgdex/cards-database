import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Landorus-EX",
		fr: "Démétéros-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		645,
	],
	hp: 180,
	types: [
		"Fightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Hammerhead",
				fr: "Massue",
			},
			effect: {
				en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Land's Judgment",
				fr: "Jugement Terrestre",
			},
			effect: {
				en: "You may discard all Fighting Energy attached to this Pokémon. If you do, this attack does 70 more damage.",
				fr: "Vous pouvez défausser toutes les Énergies Fighting attachées à ce Pokémon. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
