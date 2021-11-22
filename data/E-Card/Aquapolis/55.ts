import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Nidorino",
		fr: "Nidorino"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		33,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nidoran♂",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				en: "Poison Horn",
				fr: "Corne empoisonnée"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné."
			},

			damage: 10
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier"
			},
			effect: {
				en: "Nidorino does 10 damage to itself.",
				fr: "Nidorino s'inflige 30 dégâts."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
