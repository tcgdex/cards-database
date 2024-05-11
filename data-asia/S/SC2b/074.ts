import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨炭山VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "噴火彈"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方1張卡丟棄，若那張卡為能量卡，則增加90點傷害。然後，將丟棄的能量卡附於這隻寶可夢身上。"
		},

		damage: "40+",
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "超極巨岩懸石壁"
		},

		damage: 240,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
