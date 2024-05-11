import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "臭臭花",
		th: "คุไซฮานะ"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "雌蕊會散發一種極其強烈的惡臭， 能讓２公里外的人昏倒。",
		th: "กลิ่นเหม็นรุนแรงที่เกสรตัวเมียปล่อยออกมาไปไกลถึง 2 กิโลเมตรและทำให้หมดสติได้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "臭氣薰人",
			th: "กลิ่นหอมฉุน"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】與【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[สับสน]"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card