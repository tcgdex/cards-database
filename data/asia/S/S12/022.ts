import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "古空棘魚",
		'th-th': "จีแลนซ์",
		'ja-jp': "ジーランス"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "如岩石般堅硬的鱗片以及裝滿了油脂的鰾囊， 讓牠能承受深海的水壓。",
		'th-th': "ด้วยเกล็ดที่แข็งดั่งหินผาและถุงลมที่อัดแน่นไปด้วยไขมันจึงสามารถทนทานต่อแรงดันน้ำลึกได้",
		'ja-jp': "岩のように 硬い ウロコと 脂の 詰まった 浮袋で 深海の 水圧に 耐える。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "化石探索",
			'th-th': "ค้นหาฟอสซิล",
			'ja-jp': "かせきたんさく"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇「謎之化石」卡與「稀有化石」卡合計最多4張，在給對手看過後放回牌庫並重洗。",
			'th-th': "เลือกการ์ด [ฟอสซิลลึกลับ] และการ์ด [ฟอสซิลพิลึก] รวมกันได้สูงสุด 4 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู ใส่กลับไปในสำรับการ์ดแล้วสับ",
			'ja-jp': "自分のトラッシュから「なぞの化石」と「めずらしい化石」を合計4枚まで選び、相手に見せて、山札にもどして切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "水之波動",
			'th-th': "คลื่นน้ำ",
			'ja-jp': "みずのはどう"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			'ja-jp': "相手のバトルポケモンをねむりにする。"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680161,
				tcgplayer: 570080,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [369],
}

export default card