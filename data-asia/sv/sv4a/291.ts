import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤミラミ",
		'zh-tw': "勾魂眼"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	dexId: [302],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "暗い 洞窟に 棲み処を 作り 鋭い ツメを 使って 宝石を 掘り出しては 食べる。",
		'zh-tw': "會在陰暗的洞窟裡建造住所，並用鋒利的爪子挖寶石吃。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "やみのひとみ",
			'zh-tw': "暗之瞳"
		},

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}, {
		cost: ["Darkness"],

		name: {
			ja: "アサシンクロー",
			'zh-tw': "刺殺爪"
		},

		damage: "20+",

		effect: {
			ja: "相手のバトルポケモンが特殊状態なら、70ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢處於特殊狀態，則增加70點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card