import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水晶燈火靈VMAX"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "咒縛陽炎"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手無法從手牌使出並附上「寶可夢道具」。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極巨靈騷"
		},

		effect: {
			'zh-tw': "查看對手的手牌，造成其中訓練家卡的張數×70點傷害。"
		},

		damage: "70×",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card