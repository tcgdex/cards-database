import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土狼犬",
		ja: "ポチエナ"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "有著敏銳的嗅覺，絕對不會放過自己盯上的獵物。個性非常執著。",
		ja: "鋭い きゅうかくで ねらった 獲物は 絶対に 逃がさない。 とっても しつこい 性格だ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬",
			ja: "かじる"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞一下",
			ja: "ちょっとつっこむ"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			ja: "このポケモンにも10ダメージ。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [261]
}

export default card