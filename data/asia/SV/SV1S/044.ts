import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ワルビアル",
		'zh-tw': "流氓鱷",
		'th-th': "วารุเวียล",
		'id-id': "Krookodile"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [553],
	hp: 170,
	types: ["Fighting"],

	description: {
		'ja-jp': "強力な あごで 噛みつくと そのまま 思い切り 体を ひねり 獲物を 切断する。",
		'zh-tw': "用強力的顎咬住後，狠狠地扭動身體， 將獵物切斷。",
		'th-th': "ใช้ขากรรไกรอันทรงพลังกัดแล้วบิดตัวเต็มแรงเพื่อตัดเหยื่อให้ขาด",
		'id-id': "Begitu menggigit mangsanya dengan rahangnya yang kuat, Krookodile memutar tubuhnya untuk memutuskan tubuh mangsanya."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "ガブガブバイト",
			'zh-tw': "大口啃咬",
			'th-th': "กัดเขมือบ",
			'id-id': "Gigitan Gluk Gluk"
		},

		damage: 50,

		effect: {
			'ja-jp': "ウラが出るまでコインを投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、トラッシュする。",
			'zh-tw': "擲硬幣直到出現反面，選擇與正面出現的次數相同數量的對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			'th-th': "ทอยเหรียญจนกว่าจะออกก้อย เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม ตามจำนวนครั้งที่ออกหัว ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Lempar koin hingga hasilnya sisi belakang. Pilih Energi yang dikenakan pada Pokémon Bertarung lawan untuk tiap lemparan dengan hasil sisi depan, lalu buang ke Trash."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'ja-jp': "じしん",
			'zh-tw': "地震",
			'th-th': "แผ่นดินไหว",
			'id-id': "Gempa"
		},

		damage: 180,

		effect: {
			'ja-jp': "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的所有備戰寶可夢也各受到30點傷害。 [在備戰區不計算弱點・抵抗力。]",
			'th-th': "โปเกมอนบนเบนช์ฝ่ายเราทุกตัว ก็จะได้รับแดเมจตัวละ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini juga memberikan kerusakan masing-masing sejumlah 30 kepada semua Pokémon Cadangan sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693011,
				tcgplayer: 567161,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card