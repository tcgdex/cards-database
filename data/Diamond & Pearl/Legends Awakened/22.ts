import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
		de: "Krebutack"
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
				de: "Wurfgriff"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire reprend dans sa main le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées.",
				de: "Wirf 1 Münze. Bei \"Kopf\" nimmt dein Gegner das Verteidigende Pokémon und alle daran angelegten Karten auf seine Hand zurück."
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
				de: "Greifzangen"
			},
			effect: {
				en: "If Crawdaunt has a Technical Machine card attached to it, this attack does 50 damage plus 30 more damage.",
				fr: "Si Colhomard possède une carte Machine Technique, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn an Krebutack eine Technische Maschine angelegt ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
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
	},

	thirdParty: {
		cardmarket: 278171
	}
}

export default card
