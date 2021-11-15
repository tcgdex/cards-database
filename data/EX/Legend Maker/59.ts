import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magneti"
	},
	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		81,
	],
	hp: 50,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Magnetic Swirl",
				fr: "Tourbillon magnétique"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
