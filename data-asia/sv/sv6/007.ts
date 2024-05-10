import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "オーロット",
		'zh-tw': "朽木妖"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Oswaldo KATO",
	dexId: [709],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "森に 棲む ポケモンには とても 優しい。 頭の しげみを 棲み処にされても 気にしない。",
		'zh-tw': "對住在森林裡的寶可夢 非常親切，就算被住進了 頭上那叢葉子裡也毫不在意。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "ギガドレイン",
			'zh-tw': "終極吸取"
		},

		damage: 50,

		effect: {
			ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			'zh-tw': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "フォレストダンプ",
			'zh-tw': "森林拋擲"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card
