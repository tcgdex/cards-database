import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バイバニラ",
		'zh-tw': "雙倍多多冰"
	},

	illustrator: "Nelnal",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [584],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "体温は マイナス６度 前後。 ２匹の バニリッチが くっつき 生まれたと いわれている。",
		'zh-tw': "體溫在零下６度左右。據說是由２隻多多冰黏在一起而誕生的。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ごっかんルーム",
			'zh-tw': "酷寒空間"
		},

		effect: {
			ja: "このポケモンがいるかぎり、残りHPが「40」以下の相手のポケモンは、ワザが使えない。",
			'zh-tw': "只要這隻寶可夢在場上，對手的剩餘HP為「40」以下的寶可夢，無法使用招式。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "つららミサイル",
			'zh-tw': "冰柱飛彈"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card