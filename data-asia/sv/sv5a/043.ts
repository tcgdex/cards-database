import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ノズパス",
		'zh-tw': "朝北鼻"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [299],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "ピンチになると 磁力を 強め まわりにある 鉄の 塊を 引き寄せて 身を守ることも ある。",
		'zh-tw': "陷入危機時，有時會 增強磁力將附近的鐵塊 吸引過來保護身體。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "パワーラッシュ",
			'zh-tw': "力量猛攻"
		},

		damage: 60,

		effect: {
			ja: "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "擲1次硬幣若為反面，則在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card