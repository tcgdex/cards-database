import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "コライドンex",
		'zh-tw': "故勒頓ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ディノクライ",
			'zh-tw': "恐龍嘶吼"
		},

		effect: {
			ja: "自分の番に1回使えて、使ったなら、番は終わる。自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のタイプのたねポケモンに好きなようにつける。",
			'zh-tw': "在自己的回合時可使用1次，若使用，則回合結束。從自己的棄牌區選擇最多2張「基本【鬥】能量」卡，以任意方式附於自己的【鬥】屬性的【基礎】寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ワイルドインパクト",
			'zh-tw': "瘋狂衝擊"
		},

		damage: 220,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card