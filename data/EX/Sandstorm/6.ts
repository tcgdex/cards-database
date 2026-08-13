import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali",
		de: "Blitza"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [135],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double pied",
				de: "Doppelkick"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez deux pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Strike",
				fr: "Frap'éclair",
				de: "Blitzschlag"
			},
			effect: {
				en: "You may discard all Lightning Energy cards attached to Jolteon. If you do, this attack's base damage is 70 instead of 40.",
				fr: "Vous pouvez défausser toutes les cartes Énergie  attachées à Voltali. Dans ce cas, les dégâts de base de cette attaque sont de 70 et non de 40.",
				de: "Du kannst alle {L}-Energiekarten, die an Blitza angelegt sind, auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 70 Schadenspunkte zu anstelle von 40 Schadenspunkten."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275783,
				tcgplayer: 86336
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275783,
				tcgplayer: 86336
			}
		},
	],

}

export default card
