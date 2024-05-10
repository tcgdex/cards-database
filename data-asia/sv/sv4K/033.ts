import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "コジョフー",
		'zh-tw': "功夫鼬"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [619],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "小さくても 気性は 荒い。 油断して 近づく 相手には 華麗な 連打を おみまいする。",
		'zh-tw': "個頭雖小，個性粗暴。對於漫不經心就靠近自己 的對手會奉上華麗的連擊。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "けたぐり",
			'zh-tw': "踢倒"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "せいけんづき",
			'zh-tw': "正拳突"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card