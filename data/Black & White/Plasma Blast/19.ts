import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Octillery",
		fr: "Octillery",
		es: "Octillery",
		it: "Octillery",
		pt: "Octillery",
		de: "Octillery"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		224,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Remoraid",
		fr: "Rémoraid",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sharpshooting",
				fr: "Tir de Précision",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Bubble Beam",
				fr: "Bulles d'O",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281040
	}
}

export default card
