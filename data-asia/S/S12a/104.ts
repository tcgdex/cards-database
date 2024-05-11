import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "七夕青鳥",
		th: "ทิลทาลิส"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'zh-tw': "在晴朗的日子會混在雲朵中，自在地在空中來回飛行。 會用美妙的高音歌唱。",
		th: "วันที่อากาศแจ่มใสจะแฝงตัวเข้าไปอยู่ในปุยเมฆพลางโผบินไปมาบนท้องฟ้าและร้องเพลงด้วยเสียงโซปราโนอันไพเราะ"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "勸誘曲調",
			th: "บรรเลงเพลงชักชวน"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇1張支援者卡，給對手看過。重洗剩餘牌庫，將所選的卡放回牌庫上方。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดซัพพอร์ต 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู สับสำรับการ์ดที่เหลือ นำการ์ดที่เลือกใส่คืนกลับด้านบนของสำรับการ์ด"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "滑翔",
			th: "ถลาลม"
		},

		damage: 60,
		cost: ["Water", "Metal"]
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card