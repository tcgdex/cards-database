import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Kingler",
		fr: "Krabboss"
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
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Flail",
				fr: "Nageoire"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Kingler.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Krabboss."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Crabhammer",
				fr: "Pince-masse"
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
	}
}

export default card
