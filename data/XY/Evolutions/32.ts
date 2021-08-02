import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Starmie BREAK",
		fr: "Staross TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Starmie",
		fr: "Staross",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Break Star",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "This attack does 100 damage to each of your opponent’s Pokémon BREAK. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Étoile Turbo",
			},
			effect: {
				fr: "Cette attaque inflige 100 dégâts à chacun des Pokémon TURBO de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],

	retreat: 0
}

export default card
