import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Bewear",
		fr: "Chelours",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		760,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mix-Up",
				fr: "Mélange",
			},
			effect: {
				en: "Flip a coin. If heads, discard the top 3 cards of your opponent's deck.",
				fr: "Lancez une pièce. Si c’est face, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tantrum",
				fr: "Mauvaise Humeur",
			},
			effect: {
				en: "This Pokémon is now Confused.",
				fr: "Ce Pokémon est maintenant Confus.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
