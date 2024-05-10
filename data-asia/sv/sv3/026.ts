import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "クマシュン",
		'zh-tw': "噴嚏熊"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [613],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "寒い 地域の 海辺に 多い。 鼻水が 垂れていない ときは 病気の 可能性が ある。",
		'zh-tw': "經常出現在寒冷地帶的海邊。沒掛著一沱鼻涕的時候，就代表牠可能是生病了。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "けとばす",
			'zh-tw': "踢飛"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "ころばす",
			'zh-tw': "打滾"
		},

		damage: "20+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card