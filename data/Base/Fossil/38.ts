import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Kingler",
		fr: "Krabboss",
		de: "Kingler"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		99,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Krabby",
		fr: "Krabby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Flail",
				fr: "Nageoire",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Kingler.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Krabboss.",
				de: "Fügt 10 Schadenspunkte mal die Anzahl der Schadensmarken auf Kingler zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Crabhammer",
				fr: "Pince-masse",
				de: "Krabbhammer"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Son énorme pince peut déployer une pression de 1000 Kg. Mais elle est très encombrante."
	},

	thirdParty: {
		cardmarket: 273899,
		tcgplayer: 44440
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
