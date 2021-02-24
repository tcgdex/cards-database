import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Sunflora",
		fr: "Héliatronc",
	},
	illustrator: "Yumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		192,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Sunkern",
		fr: "Tournegrin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Power",
				fr: "Force Soleil",
			},
			effect: {
				en: "During your next turn, ignore all Energy in the attack costs of Grass Pokémon and Fire Pokémon. (This includes Pokémon that come into play on that turn.)",
				fr: "Pendant votre prochain tour, ignorez toutes les Énergies dans le coût d’attaque des Pokémon Grass et des Pokémon Fire. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour.)",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
