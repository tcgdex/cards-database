import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

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
	energyType: "Normal",

	hp: 0,

	types: [
		"Psychic"
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279091,
				tcgplayer: 88424
			}
		},
	],

}

export default card
