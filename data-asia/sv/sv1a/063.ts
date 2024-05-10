import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "デカグース",
		'zh-tw': "貓鼬探長"
	},

	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [735],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "獲物の 痕跡を 見つけると 日が 落ちるまで その場に 留まり 忍耐強く 張り込み続ける。",
		'zh-tw': "一旦發現獵物的蹤跡，就會發揮十足的耐心 蹲守在該處直到日落。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ヘッドバング",
			'zh-tw': "鐵頭碰"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かみくだく",
			'zh-tw': "咬碎"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card