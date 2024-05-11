import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "人造細胞卵",
		th: "แลนคูลัส"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "比起使用超能力，牠更喜歡靠著揮動 自傲的手臂來打倒對手。",
		th: "ชอบใช้พลังที่ตัวเองภูมิใจต่อยทำลายมากกว่าใช้พลังจิต"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "不朽細胞",
			th: "เซลล์อมตะ"
		},

		effect: {
			'zh-tw': "當這隻寶可夢受到對手的寶可夢招式的傷害而【氣絕】時，不丟棄這隻寶可夢，而是放回手牌。（寶可夢以外的卡全部丟棄。）",
			th: "โปเกมอนนี้ เมื่อได้รับแดเมจจากท่าต่อสู้ของโปเกมอนฝ่ายตรงข้ามแล้ว[หมดสภาพ] ให้นำกลับขึ้นมือ โดยไม่ต้องทิ้งที่ตำแหน่งทิ้งการ์ด (ทิ้งการ์ดทุกใบที่ไม่ใช่โปเกมอนที่ตำแหน่งทิ้งการ์ด)"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "細胞叉",
			th: "เซลล์ฟอร์ก"
		},

		effect: {
			'zh-tw': "在對手的2隻備戰寶可夢身上，各放置3個傷害指示物。",
			th: "วางตัวนับแดเมจบนโปเกมอนบนเบนช์ฝ่ายตรงข้าม 2 ตัว ตัวละ 3 ตัว"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
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
	regulationMark: "F"
}

export default card