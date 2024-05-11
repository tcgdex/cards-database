import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 野蠻鱸魚"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'zh-tw': "此寶可夢具有多項野蠻鱸魚的特徵， 雖然有性情溫馴等不同點存在， 吾人仍將其定義為野蠻鱸魚的地區形態。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "無聲下潛"
		},

		effect: {
			'zh-tw': "這個招式只可在後攻玩家的最初回合使用。在下個對手的回合，這隻寶可夢不會受到招式的傷害。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咬住"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card