import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Ekans",
		fr: "Abo",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		23,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shed Skin",
				fr: "Mue",
			},
			effect: {
				en: "Remove 2 damage counters from Ekans.",
				fr: "Retirez à Abo 2 marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Poison Fang",
				fr: "Croc-poison",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné,",
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

	retreat: 2,



}

export default card
