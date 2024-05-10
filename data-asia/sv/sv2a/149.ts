import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カイリュー",
		'zh-tw': "快龍"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 180,
	types: ["Dragon"],

	description: {
		ja: "広い 海の どこかには カイリューだけが 集まって 暮らす 島が あるらしい。",
		'zh-tw': "在廣大海洋的某處，似乎存在著只群居著 快龍的島。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ジェットクルーズ",
			'zh-tw': "噴射巡航"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のポケモン全員のにげるためのエネルギーは、すべてなくなる。",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			ja: "りゅうのはどう",
			'zh-tw': "龍之波動"
		},

		damage: 180,

		effect: {
			ja: "自分の山札を上から2枚トラッシュする。",
			'zh-tw': "將自己的牌庫上方2張卡丟棄。"
		}
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card