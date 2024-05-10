import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "デカヌチャン",
		'zh-tw': "巨鍛匠"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [959],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "１００キロを 超える ハンマーを 軽々 振りまわして 欲しいものを 奪い取り 棲み処へと 持ち帰る。",
		'zh-tw': "會輕鬆地揮舞著超過１００公斤的錘子來奪取想要的東西，然後帶回自己的住處。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "はかいのいちげき",
			'zh-tw': "破壞一擊"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "ごうきんハンマー",
			'zh-tw': "合金之錘"
		},

		damage: "60+",

		effect: {
			ja: "このポケモンにエネルギーがついているなら、120ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上附有【鋼】能量卡，則增加120點傷害。"
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