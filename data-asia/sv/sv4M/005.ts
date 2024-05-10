import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "イオルブ",
		'zh-tw': "以歐路普"
	},

	illustrator: "Oku",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [826],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "サイコパワーを 放ち 周囲を 調べている。 観測範囲は 周囲 １０キロにも 達するぞ。",
		'zh-tw': "釋放出精神力量來調查周圍的情況。牠的偵測範圍甚至可以達到方圓１０公里。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "サテライトビーム",
			'zh-tw': "衛星光束"
		},

		damage: "30×",

		effect: {
			ja: "相手のトラッシュにあるエネルギーの枚数×30ダメージ。",
			'zh-tw': "造成對手的棄牌區的能量卡的張數×30點傷害。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ブレインシェイク",
			'zh-tw': "腦力震動"
		},

		damage: 100,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card