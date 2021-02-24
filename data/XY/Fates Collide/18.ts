import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Omastar",
		fr: "Amonistar",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		139,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Restoring Beam",
				fr: "Rayon Réparateur",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Restored Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Recréé dans votre deck et le placer sur votre Banc. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque Tournante",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
