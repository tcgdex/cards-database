import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
	},
	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		124,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ominous Posture",
				fr: "Attitude Inquiétante",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another of your Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer un marqueur de dégâts de l’un de vos Pokémon vers un autre de vos Pokémon.",
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
				en: "Attract Smack",
				fr: "Poutou Grisant",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 30,

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
