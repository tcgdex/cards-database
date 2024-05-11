import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大嘴蝠",
		th: "โกลแบท"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "一次能吸３００毫升的血液。有時會因為吸了太多的血，連飛都飛不起來。",
		th: "จะดูดเลือด 300cc ต่อครั้ง บางครั้งก็ดูดเลือดมากไปจนบินไม่ได้"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "無聲抽出",
			th: "แอบจั่ว"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫抽出2張卡。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "空氣斬",
			th: "แอร์สแลช"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "ทิ้งพลังงานที่ติดกับโปเกมอนนี้ 1 ลูกที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card