import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多刺菊石獸V",
		'th-th': "ออมสตาร์V",
		'ja-jp': "オムスターV"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "原始指引",
			'th-th': "การชี้นำจากยุคดึกดำบรรพ์",
			'ja-jp': "げんしのみちびき"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張從名稱中有「化石」的物品卡進化而來的寶可夢卡，放置於備戰區。並且重洗牌庫。",
			'th-th': "เลือกโปเกมอนที่วิวัฒนาการจากการ์ดไอเท็มที่มีคำว่า [ฟอสซิล] บนชื่อได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			'ja-jp': "自分の山札から、名前に「化石」とつくグッズから進化するポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "觸手凝固",
			'th-th': "หนวดจับล็อก",
			'ja-jp': "しょくしゅがため"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的進化寶可夢無法使用招式。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนวิวัฒนาการที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ไม่ได้",
			'ja-jp': "次の相手の番、このワザを受けた進化ポケモンは、ワザが使えない。"
		},

		damage: 110,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 680157,
				tcgplayer: 570076,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card