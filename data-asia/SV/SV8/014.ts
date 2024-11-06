import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ウルガモス",
		'zh-tw': "火神蛾",
		'zh-cn': "火神蛾"
	},

	illustrator: "matazo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [637],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "炎の りんぷんを まき散らす。 危険なのは 高熱よりも あたりの 酸素が なくなること。",
		'zh-tw': "會朝四周灑出火焰鱗粉。 最危險的不是高溫， 而是會耗盡周圍的氧氣。",
		'zh-cn': "會朝四周灑出火焰鱗粉。 最危險的不是高溫， 而是會耗盡周圍的氧氣。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きゅうけつ",
			'zh-tw': "吸血",
			'zh-cn': "吸血"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			'zh-tw': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。",
			'zh-cn': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。"
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "どとうのはばたき",
			'zh-tw': "怒濤羽擊",
			'zh-cn': "怒濤羽擊"
		},

		damage: 150,

		effect: {
			ja: "このポケモンにも50ダメージ。",
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			'zh-cn': "這隻寶可夢也受到50點傷害。"
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