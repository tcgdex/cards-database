import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886436,
				tcgplayer: 693530
			}
		},
	],

	name: {
		en: "Phanpy"
	},

	illustrator: "Akino Fukuji",
	rarity: "Common",
	category: "Pokemon",
	dexId: [231],
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Mud-Slap"
		},

		cost: ["Fighting"],
		damage: 10
	}, {
		name: {
			en: "Rollout"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: 40
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card