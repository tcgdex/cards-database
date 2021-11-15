import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Kirlia",
		fr: "Kirlia"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		281,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Ralts",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dazzle Dance",
				fr: "Danse éblouissante"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur est maintenant Confus."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Life Drain",
				fr: "Perte d'énergie"
			},
			effect: {
				en: "Flip a coin. If heads, put damage counters on the Defending Pokémon until it is 10 HP away from being Knocked Out.",
				fr: "Lancez une pièce. Si c'est face, placez des marqueurs de dégât sur le Pokémon Défenseur jusqu'à ce qu'il ne lui reste plus que 10 PV."
			},

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
