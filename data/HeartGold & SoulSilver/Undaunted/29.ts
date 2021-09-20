import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Lairon",
		fr: "Galegon",
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		305,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Aron",
		fr: "Galekid",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Scrap Attack",
				fr: "Attaque de ferraille",
			},
			effect: {
				en: "Flip a coin. If heads, search your discard pile for a Metal Energy card and attach it to Lairon.",
				fr: "Lancez une pièce. Si c’est face, récupérez une carte Énergie Metal dans votre pile de défausse et attachez-la à Galegon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 60,

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

	retreat: 3,

	description: {
		en: "It loves iron ore. Groups of them fight for territory by bashing one another with their steel bodies."
	}
}

export default card
