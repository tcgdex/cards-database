import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Dedenne"
	},

	illustrator: "Yuu Nishida",
	rarity: "None",
	category: "Pokemon",
	dexId: [702],
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Its upper whiskers are sensors that survey its surroundings. Its lower whiskers are organs that shoot electricity."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Mad Party"
		},

		effect: {
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack."
		},

		damage: "20×"
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card