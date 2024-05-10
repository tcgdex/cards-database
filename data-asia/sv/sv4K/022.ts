import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "グソクムシャex",
		'zh-tw': "具甲武者ex"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "アクアブレード",
			'zh-tw': "水之利刃"
		},

		damage: 70
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "いっとうりだつ",
			'zh-tw': "一刀立斷"
		},

		damage: 170,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。その後、このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。然後，將這隻寶可夢與備戰寶可夢互換。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card