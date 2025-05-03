import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ケッキングex",
		'zh-tw': "請假王ex",
		'zh-cn': "請假王ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Colorless"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "さぼりたいしつ",
			'zh-tw': "懶怠個性",
			'zh-cn': "懶怠個性"
		},

		effect: {
			ja: "相手の場に「ポケモンex・V」がいないなら、このポケモンはワザが使えない。",
			'zh-tw': "若對手的場上沒有「寶可夢【ex】・【V】」，則這隻寶可夢無法使用招式。",
			'zh-cn': "若對手的場上沒有「寶可夢【ex】・【V】」，則這隻寶可夢無法使用招式。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "グレートスイング",
			'zh-tw': "偉大橫掃",
			'zh-cn': "偉大橫掃"
		},

		damage: 280,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card