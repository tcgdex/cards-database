import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Tsareena",
		fr: "Sucreine",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		763,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Steenee",
		fr: "Candine",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Queenly Reward",
				fr: "Récompense Royale",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Grass Energy card from your discard pile to your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Grass de votre pile de défausse à votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied Voltige",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
