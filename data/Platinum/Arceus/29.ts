import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Raticate",
		de: "Rattikarl"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],
	
	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Rattata",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recruit",
				de: "Rekrutieren"
			},
			effect: {
				en: "Look at your opponent's hand, choose a Supporter card you find there, and discard it. Then, use the effect of that card as the effect of this attack.",
				de: "Schau dir die Handkarten deines Gegners an, wähle 1 Unterstüzerkarte, die du dort gefunden hast, und lege sie auf den Ablagestapel deines Gegners. Danach nutze den Effekt der gewählten Karte als Effekt dieses Angriffs."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Extend Fang",
				de: "Fänge ausfahren"
			},
			effect: {
				en: "If Raticate has a Pokémon Tool card attached to it, this attack does 20 damage plus 40 more damage.",
				de: "Wenn an Rattikarl eine Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 20 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	thirdParty: {
		cardmarket: 278901,
		tcgplayer: 88605
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
