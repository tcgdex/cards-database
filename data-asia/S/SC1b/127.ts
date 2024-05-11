import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "掘地兔"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "力量不亞於挖掘機，連堅硬的岩盤也能挖掘。在隧道建設工程中十分活躍。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "移山突進"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方最多6張卡丟棄。然後，造成丟棄的張數×30點傷害。"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "魯莽頭擊"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
