import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Scorbunny"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [813],
	hp: 60,
	types: ["Fire"],

	description: {
		en: "A warm-up of running around gets fire energy coursing through this Pokémon's body. Once that happens, it's ready to fight at full power."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Me First"
		},

		effect: {
			en: "Draw a card."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Live Coal"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card