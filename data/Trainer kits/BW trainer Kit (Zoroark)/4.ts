import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [572],
	set: Set,

	name: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		it: "Minccino",
		pt: "Minccino",
		de: "Picochilla"
	},

	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Tail Slap"
		},
		effect: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads."
		},
		damage: "10x"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		en: "They greet one another by rubbing each other with their tails, which are always kept well groomed and clean."
	},

	retreat: 1,
}

export default card
