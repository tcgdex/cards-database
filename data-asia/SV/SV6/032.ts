import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "オニゴーリ",
		'zh-tw': "冰鬼護"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Oku",
	dexId: [362],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "空気中の 水分を 一瞬で 凍らせることで 獲物が 逃げられないように する。",
		'zh-tw': "會透過瞬間凍結 空氣中的水分， 使獵物無法逃脫。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ダメージビート",
			'zh-tw': "傷害律動"
		},

		damage: "20×",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×20ダメージ。",
			'zh-tw': "造成對手的戰鬥寶可夢身上放置的傷害指示物的數量×20點傷害。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "クレイジーヘッズ",
			'zh-tw': "瘋狂頭"
		},

		damage: 140,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card