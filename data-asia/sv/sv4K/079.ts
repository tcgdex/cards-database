import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "グレンアルマex",
		th: "กุเร็นอาร์มาex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "グレンアーマー",
			th: "กุเร็นอาร์เมอร์"
		},

		effect: {
			ja: "このポケモンのHPがまんたんの状態なら、このポケモンが相手のポケモンから受けるワザのダメージは「-80」される。",
			th: "ถ้า HP ของโปเกมอนนี้ยังเต็มอยู่ แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจากโปเกมอนฝ่ายตรงข้ามจะถูก [-80]"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "しゃくねつバズーカ",
			th: "บาซูการ้อนระอุ"
		},

		damage: "40+",

		effect: {
			ja: "このポケモンについているエネルギーの数×40ダメージ追加。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนนี้ x40"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card