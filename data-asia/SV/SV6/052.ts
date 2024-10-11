import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ペロリーム",
		'zh-tw': "胖甜妮",
		th: "เพโรรีม"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "mingo",
	dexId: [685],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "体臭から 心と 体の 調子を 嗅ぎとる。 医療への 応用が 期待されている。",
		'zh-tw': "能從人們身上的氣味裡 嗅出他們的身心狀態。 在醫療領域的實際應用備受矚目。",
		th: "สามารถรับรู้สภาพร่างกายและจิตใจได้จากการดมกลิ่นตัว ถูกคาดหวังว่าจะสามารถนำมาปรับใช้ในทางการแพทย์ได้"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ペロペロリン",
			'zh-tw': "甜甜你",
			th: "แลบลิ้นแพล็บ"
		},

		damage: "90×",

		effect: {
			ja: "コインを2回投げ、オモテの数×90ダメージ。すべてウラなら、相手のバトルポケモンをこんらんにする。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×90點傷害。若全部為反面，則將對手的戰鬥寶可夢【混亂】。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x90 ถ้าออกก้อยทั้งหมด จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card