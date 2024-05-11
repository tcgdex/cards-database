import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噴火龍V",
		ja: "リザードンV"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "燒盡",
			ja: "やきつくす"
		},

		effect: {
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。",
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"
		},

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "高溫爆破",
			ja: "ヒートブラスト"
		},

		damage: 180,
		cost: ["Fire", "Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card