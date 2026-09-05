import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Lopunny",
		fr: "Lockpin",
		es: "Lopunny",
		it: "Lopunny",
		pt: "Lopunny",
		de: "Schlapor"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		428,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Buneary",
		fr: "Laporeille",
		de: "Haspiror"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Healing Melody",
				fr: "Mélodie Apaisante",
				de: "Heilende Melodie"
			},
			effect: {
				en: "Flip a coin. If heads, heal 60 damage from each of your Pokémon.",
				fr: "Lancez une pièce. Si c'est face, soignez 60 dégâts à chacun de vos Pokémon.",
				de: "Wirf 1 Münze. Heile bei „Kopf“ 60 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Kick Away",
				fr: "Coud'Pied Éjecteur",
				de: "Wegkicken"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Extremely cautious, it quickly bounds off when it senses danger.",
		de: "Es ist extrem vorsichtig. Wenn es Gefahr wittert, macht es sich mit flinken Sprüngen aus dem Staub."
	},

	thirdParty: {
		cardmarket: 280704,
		tcgplayer: 86828
	}
}

export default card
