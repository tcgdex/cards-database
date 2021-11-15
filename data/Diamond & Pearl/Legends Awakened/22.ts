import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		342,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Corphish",
		fr: "Krebscorps",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Gripthrow",
				fr: "Lance-grippe",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire reprend dans sa main le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Prop-up Pinchers",
				fr: "Pinces calantes",
			},
			effect: {
				en: "If Crawdaunt has a Technical Machine card attached to it, this attack does 50 damage plus 30 more damage.",
				fr: "Si Colhomard possède une carte Machine Technique, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		fr: "C'est un voyou qui utilise ses pinces pour chasser les autres Pokémon hors de sa mare."
	}
}

export default card
