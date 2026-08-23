import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "尼多朗",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	description: {
		'zh-cn': "身材虽小，却性格勇敢。为了保护相好的雌性，会不顾生命果敢地战斗。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "角撞" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [32],
}

export default card
