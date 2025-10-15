import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
		de: "Milotic"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Cleansing Ring",
				fr: "Cercle nettoyant",
				de: "Reinigungsring"
			},
			effect: {
				en: "You may discard 2 cards from your hand. If you do, remove 4 damage counters from 1 of your Pokémon.",
				fr: "Vous pouvez défausser 2 cartes de votre main. Retirez alors à 1 de vos Pokémon 4 marqueurs de dégât.",
				de: "Du kannst 2 Karten von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, entferne 4 Schadensmarken von 1 deiner Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scale Blow",
				fr: "Coup d'écaille",
				de: "Schuppenschlag"
			},
			effect: {
				en: "Does 90 damage minus 10 damage for each card in your hand.",
				fr: "Inflige 90 dégâts moins 10 dégâts pour chaque carte se trouvant dans votre main.",
				de: "Dieser Angriff fügt 90 Schadenspunkte minus 10 Schadenspunkte für jede Karte auf deiner Hand zu."
			},
			damage: "90-",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278689
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		},
		{
			type: "normal",
			stamp: ["pre-release","staff"]
		}
	]
}

export default card
