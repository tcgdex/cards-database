import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		110,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Aftermath",
				fr: "Boom Final",
			},
			effect: {
				en: "When this Pokémon is Knocked Out by damage from an opponent's attack, discard the top 3 cards of your opponent's deck.",
				fr: "Lorsque ce Pokémon est mis K.O. par les dégâts d'une attaque de votre adversaire, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Smogbank",
				fr: "Smog Envahissant",
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
