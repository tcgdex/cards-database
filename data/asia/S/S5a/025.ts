import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 急凍鳥V",
		th: "กาลาร์ ฟรีเซอร์V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "再構築",
			th: "สร้างใหม่"
		},

		effect: {
			'zh-tw': "在自己的回合時，若將自己的2張手牌丟棄，則可使用1次。從自己的牌庫抽出1張卡。",
			th: "ในเทิร์นฝ่ายเรา ถ้าทิ้งการ์ดบนมือฝ่ายเรา 2 ใบที่ตำแหน่งทิ้งการ์ดจะสามารถใช้ได้ 1 ครั้ง จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神光束",
			th: "ไซโคบีม"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ [สับสน]"
		},

		damage: 110,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card