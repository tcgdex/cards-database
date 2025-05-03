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
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Tackle"
		},
		damage: 10
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Bite"
		},
		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		en: "Using food stored in cheek pouches, they can keep watch for days. They use their tails to communicate with others."
	},

	retreat: 1,
}

export default card
