import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Charizard",
		fr: "Dracaufeu brillant",
		de: "Schimmerndes Glurak"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 100,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "White-Hot Flame",
				fr: "Flammes blanches",
				de: "Heiße weiße Flamme"
			},
			effect: {
				en: "Discard 1 Energy card and 1 Energy card attached to Shining Charizard or this attack does nothing. Flip a coin. If tails, Shining Charizard does 30 damage to itself.",
				fr: "Défaussez-vous d'une carte Énergie  et d'une carte Énergie  attachées à Dracaufeu brillant ou cette attaque ne fait rien. Lancez une pièce. Si c'est pile, Dracaufeu brillant s'inflige 30 dégâts.",
				de: "Lege eine jeweils an Schimmerndes Glurak angelegte -Energiekarte und -Energiekarte auf deinen Ablagestapel, oder dieser Angriff hat keine Auswirkungen. Wirf eine Münze. Bei \"Zahl\" fügt sich Schimmerndes Glurak selbst 30 Schadenspunkte zu."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
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
		fr: "Les flammes qu'il souffle sont si chaudes qu'elles peuvent faire fondre n'importe quoi."
	},

	thirdParty: {
		cardmarket: 274759,
		tcgplayer: 89163
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
