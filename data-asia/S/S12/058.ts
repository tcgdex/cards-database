import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "酷豹",
		th: "เลพัลดัส"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "雖然人們容易被牠美麗的毛皮和姿態所迷惑，但牠其實 是一種善變而凶暴的寶可夢。",
		th: "มักจะหลงใหลไปกับขนและลักษณะที่สวยงาม แต่เป็นโปเกมอนที่บ้าคลั่งและอารมณ์แปรปรวน"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "亂抓",
			th: "ข่วนแหลก"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×40點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x40"
		},

		damage: "40×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "利爪劈擊",
			th: "กรงเล็บฉีกร่าง"
		},

		damage: 110,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card