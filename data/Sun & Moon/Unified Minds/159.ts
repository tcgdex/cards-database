import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Noivern",
		fr: "Bruyverne",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		715,
	],
	hp: 120,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Boomburst",
				fr: "Bang Sonique",
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dragon Pulse",
				fr: "Dracochoc",
			},
			effect: {
				en: "Discard the top card of your deck.",
				fr: "Défaussez la carte du dessus de votre deck.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
