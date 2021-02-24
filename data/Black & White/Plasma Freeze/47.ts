import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},
	illustrator: "Hiroki Asanuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bench Barrier",
				fr: "Barrière de Banc",
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by attacks.",
				fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par des attaques.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psy Bolt",
				fr: "Choc Mental",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
