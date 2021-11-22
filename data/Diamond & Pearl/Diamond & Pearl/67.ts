import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Unown C",
		fr: "Zarbi C",
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Call",
				fr: "CRIER",
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown C is on your Bench, you may flip a coin. If heads, search your deck for any 1 Unown and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi C est sur votre Banc, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre deck 1 Zarbi et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou de Zarbi est apparu en premier."
	}
}

export default card
