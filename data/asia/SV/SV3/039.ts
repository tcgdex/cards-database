import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ズピカ",
		'zh-tw': "光蚪仔",
		'th-th': "ซุพีคา"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [938],
	hp: 50,
	types: ["Lightning"],

	description: {
		'ja-jp': "尻尾を 振って 発電する。 危険を 感じると 頭を 点滅させて 仲間に 伝える。",
		'zh-tw': "會搖尾巴來發電。感覺到有危險時，會閃爍頭部通知夥伴。",
		'th-th': "แกว่งหางเพื่อผลิตไฟฟ้า เมื่อรู้สึกถึงอันตรายจะทำให้ไฟบนหัวกะพริบเพื่อแจ้งพวกพ้อง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "たいでん",
			'zh-tw': "帶電",
			'th-th': "สะสมประจุไฟฟ้า"
		},

		effect: {
			'ja-jp': "自分のトラッシュから「基本エネルギー」を1枚選び、このポケモンにつける。",
			'zh-tw': "從自己的棄牌區選擇1張「基本【雷】能量」卡，附於這隻寶可夢身上。",
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[สายฟ้า]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ピッカリだま",
			'zh-tw': "光彈",
			'th-th': "ลูกกลมเจิดจ้า"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723980,
				tcgplayer: 566993,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card