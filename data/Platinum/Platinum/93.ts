import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Skitty",
		fr: "Skitty",
		de: "Eneco"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [300],

	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Heal Bell",
				fr: "Glas de soin",
				de: "Vitalglocke"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon.",
				fr: "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
				de: "Entferne 1 Schadensmarke von jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "Skitty does 10 damage to itself.",
				fr: "Skitty s'inflige 10 dégâts.",
				de: "Eneco fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		en: "It can't stop itself from chasing moving things, and it runs in a circle, chasing its own tail.",
		de: "Es muss Dinge, die sich bewegen, einfach jagen. Es rennt oft im Kreis und jagt seinen eigenen Schweif."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89268,
				cardmarket: 278514
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278514,
				tcgplayer: 89268
			}
		}
	],

}

export default card
