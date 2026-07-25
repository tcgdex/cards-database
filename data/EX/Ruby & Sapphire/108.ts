import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Fire Energy",
		fr: "Énergie Feu",
		de: "Feuerenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275756,
				tcgplayer: 85458
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275756,
				tcgplayer: 85458
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125124
			}
		},
		{
			type: "normal",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 176626
			}
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				tcgplayer: 477617
			}
		},
		{
			type: "normal",
			stamp: ["chris-fulop"],
			thirdParty: {
				tcgplayer: 477384
			}
		}
	],

	types: [
		"Fire"
	],
	retreat: 0
}

export default card
