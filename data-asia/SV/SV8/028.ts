import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "トドグラー",
		'zh-tw': "海魔獅",
		'zh-cn': "海魔獅"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [364],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "流氷の 上で 生活。 泳ぎながら 獲物の 匂いを 嗅ぎわけて 見つけだし 捕まえる。",
		'zh-tw': "在浮冰上生活。能夠一邊 游泳一邊嗅出獵物的氣味， 把對方找出來獵捕。",
		'zh-cn': "在浮冰上生活。能夠一邊 游泳一邊嗅出獵物的氣味， 把對方找出來獵捕。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "つきたおし",
			'zh-tw': "撞倒",
			'zh-cn': "撞倒"
		},

		damage: 30
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "アイスボール",
			'zh-tw': "冰球",
			'zh-cn': "冰球"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793462
	}
}

export default card