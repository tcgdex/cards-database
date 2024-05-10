import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "フーディンex",
		'zh-tw': "胡地ex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "マインドジャック",
			'zh-tw': "意志劫持"
		},

		damage: "90+",

		effect: {
			ja: "相手のベンチポケモンの数×30ダメージ追加。",
			'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ディメンションハンド",
			'zh-tw': "維度之手"
		},

		damage: 120,

		effect: {
			ja: "このワザは、このポケモンがベンチにいても使える。",
			'zh-tw': "就算這隻寶可夢在備戰區，這個招式也可使用。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card