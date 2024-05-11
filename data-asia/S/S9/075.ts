import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈咬陸鯊"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'zh-tw': "棲息在火山區的山中。會以不遜於噴射戰鬥機的速度在 天空飛行，盡情地獵取獵物。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "音速迴避"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。在下個對手的回合結束前，這隻寶可夢不會受到對手的寶可夢招式的傷害與效果的影響。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "龍之利刃"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方2張卡丟棄。"
		},

		damage: 160,
		cost: ["Water", "Fighting"]
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card