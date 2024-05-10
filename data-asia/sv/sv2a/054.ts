import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "コダック",
		'zh-tw': "可達鴨"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [54],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "いつも 頭痛に 悩まされている。 この 頭痛が 激しくなると 不思議な 力を 使いはじめる。",
		'zh-tw': "一直受到頭痛的困擾。當頭痛欲裂時， 就會開始使用神奇的力量。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かんがえすぎる",
			'zh-tw': "過慮"
		},

		effect: {
			ja: "次の相手の番、相手が投げるコインは、すべてウラとしてあつかう。",
			'zh-tw': "在下個對手的回合，對手擲的硬幣全部視為反面。"
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "みずでっぽう",
			'zh-tw': "水槍"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card