import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Chinchou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Lightning Ball",
				fr: "Boule éclair",
				de: "Kugelblitz"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Conduction",
				fr: "Conduction",
				de: "Stromübertragung"
			},
			effect: {
				en: "Discard all Energy cards attached to Lanturn. Flip a number of coins equal to the number of Energy cards you discarded. This attack does 30 damage plus 40 more damage for each heads.",
				fr: "Défaussez-vous de toutes les cartes Énergie  attachées à Lanturn. Lancez un nombre de pièces égal au nombre de cartes Énergie  que vous avez défaussé. Cette attaque inflige 30 dégâts plus 40 dégâts supplémentaires pour chaque face.",
				de: "Lege alle an Lanturn angelegten -Energiekarten auf deinen Ablagestapel. Wirf eine Anzahl Münzen gleich der Anzahl so abgelegter -Energiekarten. Dieser Angriff fügt 30 Schadenspunkte plus 40 weitere Schadenspunkte pro geworfenem 'Kopf' zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275055,
		tcgplayer: 86600
	}
}

export default card
