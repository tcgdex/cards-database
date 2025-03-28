import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "リーリエのピッピex",
		'zh-tw': "莉莉艾的皮皮ex",
		'zh-cn': "莉莉艾的皮皮ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フェアリーゾーン",
			'zh-tw': "妖精領域",
			'zh-cn': "妖精領域"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手の場のポケモン全員の弱点は、すべてタイプになる。［弱点は「×2」で計算する。］",
			'zh-tw': "只要這隻寶可夢在場上，對手的場上的所有【龍】寶可夢的弱點全部改爲【超】屬性。[弱點以「×2」計算傷害。]",
			'zh-cn': "只要這隻寶可夢在場上，對手的場上的所有【龍】寶可夢的弱點全部改爲【超】屬性。[弱點以「×2」計算傷害。]"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "フルムーンロンド",
			'zh-tw': "滿月輪舞",
			'zh-cn': "滿月輪舞"
		},

		damage: "20+",

		effect: {
			ja: "おたがいのベンチポケモンの数×20ダメージ追加。",
			'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。",
			'zh-cn': "增加雙方的備戰寶可夢的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card