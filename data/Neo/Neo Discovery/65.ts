import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Teddiursa",
		fr: "Teddiursa",
		de: "Teddiursa"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		216,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Nap Time",
				fr: "Sieste",
				de: "Mittagsschlaf"
			},
			effect: {
				en: "Remove all damage counters from Teddiursa. Teddiursa is now Asleep.",
				fr: "Retirez tous les marqueurs de dégâts de Teddiursa. Teddiursa est maintenant Endormi.",
				de: "Entferne alle Schadensmarken von Teddiursa. Teddiursa schläft jetzt."
			},

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
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "S'il trouve du miel, sa marque en forme de croissant se met à luire. Il se lèche toujours les pattes parce qu'elles sont couvertes de miel."
	},

	thirdParty: {
		cardmarket: 274576,
		tcgplayer: 89855
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

