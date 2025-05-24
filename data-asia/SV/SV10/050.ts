import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>班基拉斯",
		'zh-cn': "<火箭隊的>班基拉斯",
		ja: "ロケット団のバンギラス"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		'zh-tw': "即便是改變周圍的地形 也是小事一樁的大力士。 個性狂妄，不顧周遭的感受。",
		'zh-cn': "即便是改變周圍的地形 也是小事一樁的大力士。 個性狂妄，不顧周遭的感受。",
		ja: "あたりの 地形を 変えるぐらい 朝飯前の 力持ち。 まわりを 気にしない ふてぶてしさ。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "揚沙",
			'zh-cn': "揚沙",
			ja: "すなおこし"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，每次寶可夢檢查時，在對手的所有【基礎】寶可夢身上各放置2個傷害指示物。",
			'zh-cn': "只要這隻寶可夢在戰鬥場上，每次寶可夢檢查時，在對手的所有【基礎】寶可夢身上各放置2個傷害指示物。",
			ja: "このポケモンがバトル場にいるかぎり、ポケモンチェックのたび、相手のたねポケモン全員に、それぞれダメカンを2個のせる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "打穿衝撞",
			'zh-cn': "打穿衝撞",
			ja: "ぶちぬきタックル"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [248]
}

export default card