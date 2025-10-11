import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoke",
		de: "Woingenau"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Double Return",
				fr: "Double retour",
				de: "Doppelbonus"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage times the number of damage counters on Wobbuffet.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts sur Qulbutoke.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte mal der Anzahl an Schadensmarken auf Woingenau zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It hates light and shock. If attacked, it inflates its body to build up its counterstrike."
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 278985,
		tcgplayer: 90621
	}
}

export default card
