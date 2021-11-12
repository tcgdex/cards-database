import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Spinarak",
		fr: "Mimigal"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		167,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],

			name: {
				en: "Poison Sting",
				fr: "Dard-venin"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné."
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il tisse une toile en utilisant un fil fin mais solide, puis il attend tranquillement sa proie."
	}
}

export default card
