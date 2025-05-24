import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒビキのマグカルゴ",
		'zh-tw': "<阿響的>熔岩蝸牛",
		'zh-cn': "<阿響的>熔岩蝸牛"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [219],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "火山の 火口付近で 暮らす。 マグマが 冷えて 固まった 殻に 炎エネルギーを 蓄えている。",
		'zh-tw': "生活在火山口附近。 在熔岩冷卻後凝固而成的 殼裡面儲存火之能量。",
		'zh-cn': "生活在火山口附近。 在熔岩冷卻後凝固而成的 殼裡面儲存火之能量。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "とけてながれる",
			'zh-tw': "溶化流動",
			'zh-cn': "溶化流動"
		},

		effect: {
			ja: "このポケモンにエネルギーがついていないなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			'zh-tw': "若這隻寶可夢身上沒有附加能量卡，則這隻寶可夢【撤退】所需的能量全部消除。",
			'zh-cn': "若這隻寶可夢身上沒有附加能量卡，則這隻寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire"],

		name: {
			ja: "ようがんバースト",
			'zh-tw': "熔岩爆炸",
			'zh-cn': "熔岩爆炸"
		},

		damage: "70×",

		effect: {
			ja: "このポケモンについているエネルギーを5枚までトラッシュし、その枚数×70ダメージ。",
			'zh-tw': "將最多5張這隻寶可夢身上附加的【火】能量卡丟棄，造成其張數×70點傷害。",
			'zh-cn': "將最多5張這隻寶可夢身上附加的【火】能量卡丟棄，造成其張數×70點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card