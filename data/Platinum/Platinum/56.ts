import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Monferno",
		fr: "Chimpenfeu",
		de: "Panpyro"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [391],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Chimchar",
		fr: "Ouisticram",
		de: "Panflam"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Tail Slap",
				fr: "Coup de queue enflammé",
				de: "Feuerschweifschlag"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Monferno.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Chimpenfeu.",
				de: "Wirf 1 Münze. Bei „Zahl“ entferne 1 {R}-Energie, die an Panpyro angelegt ist, und lege sie auf deinen Ablagestapel."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Paralyzing Gaze",
				fr: "Regard paralysant",
				de: "Lähmender Blick"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	description: {
		en: "It skillfully control the intensity of the fire on its tail to keep its foes at an ideal distance.",
		de: "Es kontrolliert die Stärke des Feuers auf seinem Schweif geschickt, um Gegner auf Distanz zu halten."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87572,
				cardmarket: 278477
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278477,
				tcgplayer: 87572
			}
		}
	],

	retreat: 0
}

export default card
