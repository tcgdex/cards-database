import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Doduo",
		fr: "Reptincel",
		de: "Glutexo"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [84],

	hp: 40,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Speed",
				fr: "Double griffe",
				de: "Doppelkratzer"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Doduo.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rear Kick",
				fr: "Lance-flammes",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard 1 Energy card attached to Charmeleon.",
				fr: "Défaussez-vous d'une carte Énergie  attachée à Reptincel.",
				de: "Lege 1 an Glutexo angelegte -Energiekarte auf deinen Ablagestapel."
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84224,
				cardmarket: 274948
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
