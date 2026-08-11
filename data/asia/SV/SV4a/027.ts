import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パルデア ケンタロス",
		'zh-tw': "帕底亞 肯泰羅",
		'th-th': "พัลเดีย เคนเทารอส",
		'id-id': "Paldean Tauros"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "高温の 鼻息を 吹きだすので ブレイズ種と 名づけられた。 ３本の 尻尾を 束ねている。",
		'zh-tw': "噴出的鼻息溫度很高，因此被命名為火熾種。 ３根尾巴總是束在一起。",
		'th-th': "เพราะพ่นลมหายใจที่มีอุณหภูมิสูงจึงถูกตั้งชื่อว่าพันธุ์อัคคี หางทั้งสามพันกันเป็นเกลียว",
		'id-id': "Tauros ini diberi nama Varian Api karena mengembuskan napas bersuhu tinggi dari hidungnya. Pokémon ini mengikat 3 ekornya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "いかりのつの",
			'zh-tw': "憤怒之角",
			'th-th': "เขาพิโรธ",
			'id-id': "Tanduk Kemarahan"
		},

		damage: "20+",

		effect: {
			'ja-jp': "このポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'ja-jp': "ブレイズダッシュ",
			'zh-tw': "火焰衝刺",
			'th-th': "เบลซแดช",
			'id-id': "Blaze Dash"
		},

		damage: 120,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746229,
				tcgplayer: 567383,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577310,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card