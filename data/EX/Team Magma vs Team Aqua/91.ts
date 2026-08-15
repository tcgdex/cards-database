import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Entei ex",
		fr: "Entei ex",
		de: "Entei-ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [244],

	hp: 100,

	stage: "Basic",
	types: [
		"Fire"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes calcinantes",
				de: "Sengende Flamme"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Bright Flame",
				fr: "Flamme éclatante",
				de: "Helle Flamme"
			},
			effect: {
				en: "Discard 2 Energy attached to Entei ex.",
				fr: "Défaussez 2 Énergies attachées à Entei ex.",
				de: "Lege 2 an Entei ex angelegte Energien auf deinen Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85278,
				cardmarket: 276068
			}
		}
	]
}

export default card
