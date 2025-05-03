import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "トランセル",
		'zh-tw': "鐵甲蛹",
		'zh-cn': "鐵甲蛹"
	},

	illustrator: "OKUBO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [11],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "硬い 殻に 包まれているが 中身は 軟らかいので 強い 攻撃には 耐えられない。",
		'zh-tw': "雖然有堅硬的外殼， 但因為殼裡的身體很軟， 所以無法抵抗強力的攻擊。",
		'zh-cn': "雖然有堅硬的外殼， 但因為殼裡的身體很軟， 所以無法抵抗強力的攻擊。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "かたくなる",
			'zh-tw': "變硬",
			'zh-cn': "變硬"
		},

		effect: {
			ja: "次の相手の番、このポケモンは「60」以下のワザのダメージを受けない。",
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到「60」以下的招式的傷害。",
			'zh-cn': "在下個對手的回合，這隻寶可夢不會受到「60」以下的招式的傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card