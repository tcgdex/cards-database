import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Seaking",
		fr: "Poissoroy",
		de: "Golking"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		119,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Seaking.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Poissoroy.",
				de: "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Golking zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Horn Drill",
				fr: "Empal'korne",
				de: "Hornbohrer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il niche dans des rochers du ruisseau qu'il évide avec sa corne. Il donnerait sa vie pour ses œufs."
	},

	thirdParty: {
		cardmarket: 277561
	}
}

export default card
