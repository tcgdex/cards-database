import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Crawdaunt G",
		fr: "Colhomard ",
	},
	illustrator: "Wataru Kawahara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		342,
	],
	hp: 80,
	types: [
		"Darkness",
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Smash Turn",
				fr: "Tour fracassant",
			},
			effect: {
				en: "You may switch Crawdaunt G with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Colhomard  avec 1 de vos Pokémon de Banc.",
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
