import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘",
		th: "พิคาชู"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "據說同一處有好幾隻的時候，那裡就會凝集起強烈的電力， 還可能造成閃電落於該處。",
		th: "ว่ากันว่าพอรวมตัวกันหลาย ๆ ตัว พลังงานไฟฟ้าแรงสูงจะสะสมจนอาจมีฟ้าผ่าลงมา"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電磁電光",
			th: "อิเล็กโทรแมกเนติกสปาร์ก"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到10點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจ 10 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card