import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Scorbunny"
	},

	illustrator: "Hitoshi Ariga",
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
		cost: ["Fire"],

		name: {
			en: "Super Singe"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned."
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card