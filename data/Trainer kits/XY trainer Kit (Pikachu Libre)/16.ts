import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [661],
	set: Set,

	name: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	illustrator: "Kanako Eo",

	description: {
		en: "Despite the beauty of its lilting voice, it’s merciless to intruders that enter its territory."
	},

	attacks: [{
		name: {
			en: "Acrobatics"
		},

		damage: "10+",

		effect: {
			en: "Flip 2 coins. This attack does 10 more damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}]
}

export default card