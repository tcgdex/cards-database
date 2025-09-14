import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Psychic Energy",
		fr: "Énergie Psy",
		de: "Psychoenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 275755,
		tcgplayer: 88418
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		},
		{
			type: "normal",
			stamp: ["professor-program"]
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"]
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"]
		}
	]
}

export default card
