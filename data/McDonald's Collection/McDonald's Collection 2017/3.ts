import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		725,
	],
	set: Set,
	name: {
		en: "Litten",
		fr: "Flamiaou",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fire",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},
			damage: "10",
		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
			},
			damage: "20",
		},
	],

	illustrator: "Akira Komayama",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301845,
				tcgplayer: 152683
			}
		}
	]
}

export default card

