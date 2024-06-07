import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		th: "เคมุตโสะ",
		'zh-tw': "刺尾蟲"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		th: "อาศัยอยู่ตามป่าและพุ่มไม้ เวลาถูกศัตรูโจมตีเข้ามา จะแทงกลับด้วยเข็มพิษจากก้น",
		'zh-tw': "棲息在森林和草叢裡。受到敵人的襲擊時， 會用尾部的毒刺來對抗。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "แทงฉึกฉึก",
			'zh-tw': "刺刺痛痛"
		},

		damage: 10,
		cost: ["Grass"]
	}, {
		name: {
			th: "แห่รวมตัว",
			'zh-tw': "綿綿集聚"
		},

		effect: {
			th: "เลือกการ์ด [เคมุตโสะ] [คาราซาลิส] [อาเกฮันท์] [มายูลด์] [โดคุเคล] จากสำรับการ์ดฝ่ายเราตามจำนวนที่ชอบ ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			'zh-tw': "從自己的牌庫選擇任意數量的「刺尾蟲」「甲殼繭」「狩獵鳳蝶」「盾甲繭」「毒粉蛾」卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Grass", "Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card