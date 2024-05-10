import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "イダイナキバex",
		'zh-tw': "雄偉牙ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "がんばんくずし",
			'zh-tw': "岩盤崩裂"
		},

		damage: 40,

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。",
			'zh-tw': "將場上的競技場卡丟棄。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "ギガントタスク",
			'zh-tw': "巨烈長牙"
		},

		damage: 250,

		effect: {
			ja: "このポケモンにも50ダメージ。",
			'zh-tw': "這隻寶可夢也受到50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card