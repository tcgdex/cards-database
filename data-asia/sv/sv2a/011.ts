import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "トランセル",
		'zh-tw': "鐵甲蛹"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [11],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "硬い 殻に 包まれているが 中身は 軟らかいので 強い 攻撃には 耐えられない。",
		'zh-tw': "雖然有堅硬的外殼，但因為殼裡的身體很軟， 所以無法抵抗強力的攻擊。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ぼうぎょしせい",
			'zh-tw': "防禦姿勢"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card