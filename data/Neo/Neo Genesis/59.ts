import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Gligar",
		fr: "Scorplane",
		de: "Skorgla"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		207,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],

			name: {
				en: "Poison Sting",
				fr: "Dard-venin",
				de: "Giftstachel"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt vergiftet."
			},

			damage: 10
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		en: "It flies straight at its target's face, then clamps down on the startled victim to inject poison.",
		fr: "Il vole droit sur le visage de sa cible, et s'accroche ensuite à sa victime effrayée pour lui injecter du poison.",
		de: "Es fliegt direkt zum Gesicht seiner Ziele, und krallt sich dann am entsetzten Opfer fest, um Gift einzuspritzen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274459,
				tcgplayer: 85764
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274459,
				tcgplayer: 85764
			}
		}
	]
}

export default card
