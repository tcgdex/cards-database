import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		de: "Glurak"
	},

	illustrator: "Atsuko Nishida",
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

	evolveFrom: {
		en: "Charmeleon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				en: "Tail Smash",
				fr: "Éclate-queue",
				de: "Schwanzschmetterer"
			},

			effect: {
				en: "Flip a coin. If heads, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei Zahl hat dieser Angriff keine Auswirkungen."
			},

			damage: 40
		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-flammes",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard 1 Energy card attached to Charizard.",
				fr: "Défaussez-vous d'une carte Énergie  attachée à Dracaufeu.",
				de: "Lege 1 an Glurak angelegte  Energiekarte auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 274881,
		tcgplayer: 84184
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
