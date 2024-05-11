import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "酷豹",
		th: "เลพัลดัส"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "雖然人們容易被牠美麗的毛皮和姿態所迷惑，但牠其實 是一種善變而凶暴的寶可夢。",
		th: "มักจะหลงใหลไปกับขนและลักษณะที่สวยงาม แต่เป็นโปเกมอนที่บ้าคลั่งและอารมณ์แปรปรวน"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "交易",
			th: "แลกเปลี่ยน"
		},

		effect: {
			'zh-tw': "在自己的回合時，若將自己的1張手牌丟棄，則可使用1次。從自己的牌庫抽出2張卡。",
			th: "ในเทิร์นฝ่ายเรา ถ้าทิ้งการ์ดบนมือฝ่ายเรา 1 ใบที่ตำแหน่งทิ้งการ์ด จะสามารถใช้ได้ 1 ครั้ง จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "劈開",
			th: "ฟันแหลก"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card