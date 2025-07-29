import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Klinklang",
		fr: "Cliticlic",
		es: "Klinklang",
		it: "Klinklang",
		pt: "Klinklang",
		de: "Klikdiklak"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		601,
	],

	hp: 150,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Klang",
		fr: "Clic",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Charge Beam",
				fr: "Rayon Chargé",
			},
			effect: {
				en: "Attach an Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Zap Cannon",
				fr: "Élecanon",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon can't use Zap Cannon during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 280041
	}
}

export default card
