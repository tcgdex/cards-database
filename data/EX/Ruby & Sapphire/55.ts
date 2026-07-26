import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Goldeen",
		fr: "Poissirène",
		de: "Goldini"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [118],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage for each damage counter on Goldeen.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueur de dégât sur Poissirène.",
				de: "Dieser Angriff fügt für jede Schadensmarke auf Goldini 10 Schadenspunkte zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [{
		type: "normal",
		thirdParty: {
			cardmarket: 275703,
			tcgplayer: 85803
		}
	},
	{
		type: "reverse",
		thirdParty: {
			tcgplayer: 85803
		}
	},
	{
		type: "normal",
		subtype: "no-e-reader",
		thirdParty: {
			tcgplayer: 125116
		}
	}
	],

}

export default card
