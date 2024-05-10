import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドキング",
		'zh-tw': "尼多王"
	},

	illustrator: "Misaki Hashimoto",
	category: "Pokemon",
	dexId: [34],
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "力自慢の ポケモン。 太い 尻尾と ダイヤをも 砕く ツノを 駆使して 豪快に 戦う。",
		'zh-tw': "以力氣為傲的寶可夢。會善用粗壯的尾巴和連鑽石也能擊碎的角，豪邁地戰鬥。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はりきりキング",
			'zh-tw': "活力王者"
		},

		effect: {
			ja: "自分の場に「ニドクイン」がいるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
			'zh-tw': "若自己的場上有「尼多后」，則這隻寶可夢使用招式所需的能量全部消除。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ベノムインパクト",
			'zh-tw': "毒液衝撞"
		},

		damage: 190,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card