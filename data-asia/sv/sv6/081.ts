import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ドラパルトex",
		'zh-tw': "多龍巴魯托ex"
	},

	category: "Pokemon",
	rarity: "Double rare",
	illustrator: "5ban Graphics",
	hp: 320,
	types: ["Dragon"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ジェットヘッド",
			'zh-tw': "噴射頭擊"
		},

		damage: 70
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			ja: "ファントムダイブ",
			'zh-tw': "幻影奇襲"
		},

		damage: 200,

		effect: {
			ja: "ダメカン6個を、相手のベンチポケモンに好きなようにのせる。",
			'zh-tw': "將6個傷害指示物以任意方式放置於對手的備戰寶可夢身上。"
		}
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card