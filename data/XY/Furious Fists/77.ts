import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Noivern",
		fr: "Bruyverne",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		715,
	],
	hp: 100,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Echolocation",
				fr: "Écholocation",
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez les dégâts.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Boomburst",
				fr: "Bang Sonique",
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
