import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ソウブレイズex",
		id: "Ceruledge ex",
		'zh-tw': "蒼炎刃鬼ex",
		'zh-cn': "蒼炎刃鬼ex"
	},

	illustrator: "akagi",
	rarity: "None",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "しんえんほむら",
			id: "Kobaran Api Jurang Dalam",
			'zh-tw': "深淵熾火",
			'zh-cn': "深淵熾火"
		},

		damage: "30+",

		effect: {
			ja: "自分のトラッシュにあるエネルギーの枚数×20ダメージ追加。",
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap lembar Energi yang ada di Trash sendiri.",
			'zh-tw': "增加自己的棄牌區的能量卡的張數×20點傷害。",
			'zh-cn': "增加自己的棄牌區的能量卡的張數×20點傷害。"
		}
	}, {
		cost: ["Fire", "Psychic", "Metal"],

		name: {
			ja: "アメジストレイジ",
			id: "Amethyst Rage",
			'zh-tw': "紫水晶激怒",
			'zh-cn': "紫水晶激怒"
		},

		damage: 280,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			id: "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash.",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。",
			'zh-cn': "將這隻寶可夢身上附加的能量卡全部丟棄。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card