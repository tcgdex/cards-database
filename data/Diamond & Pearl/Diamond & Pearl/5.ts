import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Simiabraz",
		de: "Panferno"
	},

	illustrator: "Nakaoka",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		392,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Meteor Punch",
				fr: "Poing-météore",
				de: "Meteorhieb"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu"
			},
			damage: "30x",

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flare Blitz",
				fr: "Boutefeu",
				de: "Flammenblitz"
			},
			effect: {
				en: "Discard all Fire Energy attached to Infernape.",
				fr: "Défaussez toutes les Énergies Fire attachées à Simiabraz.",
				de: "Entferne alle an Panferno angelegten  Energien und lege sie auf deinen Ablagestapel"
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	thirdParty: {
		cardmarket: 277504
	}
}

export default card
