import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		284,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Surprising Pattern",
				fr: "Motif Surprise",
			},
			effect: {
				en: "Discard all Special Energy from each of your opponent's Pokémon.",
				fr: "Défaussez toute l’Énergie spéciale attachée à chacun des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Wing",
				fr: "Tornad’Aile",
			},
			effect: {
				en: "Flip 4 coins. This attack does 40 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

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
