import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [504],
	set: Set,

	name: {
		en: "Patrat",
		fr: "Ratentif",
		es: "Patrat",
		it: "Patrat",
		pt: "Patrat",
		de: "Nagelotz"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless"
	],
	stage: "Basic",

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle"
		},
		damage: 10
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss"
		},
		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		en: "Using food stored in cheek pouches, they can keep watch for days. They use their tails to communicate with others.",
		de: "Hortet in seinen Backentaschen Futter, um tagelang Wache stehen zu können, und gibt Kameraden über seine Rute Signale."
	},

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280092,
				tcgplayer: 98709
			}
		},
	],

}

export default card
