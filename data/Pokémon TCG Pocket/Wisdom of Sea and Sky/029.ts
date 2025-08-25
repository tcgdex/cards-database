import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Typhlosion"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		en: "Quilava"
	},

	description: {
		en: "If its rage peaks, it becomes so hot that anything\nthat touches it will instantly go up in flames."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fire Breath"
		},

		effect: {
			en: "Once during your turn, you may make your opponent's Active Pokémon Burned."
		}
	}],

	attacks: [{
		name: {
			en: "Magma Punch"
		},

		damage: 60,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card