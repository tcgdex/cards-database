import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ストリンダー",
		'zh-tw': "顫弦蠑螈",
		'th-th': "สตรินเดอร์",
		'id-id': "Toxtricity"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [849],
	hp: 130,
	types: ["Lightning"],

	description: {
		'ja-jp': "荒々しく 胸もとの 突起を かき鳴らして 放つ 電撃は １５０００ボルトを 軽く 超える。",
		'zh-tw': "會激烈地彈奏胸部的突起物。彈奏時釋放出的電擊， 可以輕易超過１５０００伏特。",
		'th-th': "กระแสไฟฟ้าที่ส่งออกมาจากการเกาส่วนนูนที่อกอย่างรุนแรงมีแรงดันสูงกว่า 15000 โวลต์",
		'id-id': "Kekuatan listrik yang dihasilkan dengan cara Toxtricity memetik tonjolan yang ada di dadanya secara kasar dengan mudah melampaui 15 ribu volt."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "むしりとる",
			'zh-tw': "拔除",
			'th-th': "เด็ดออก",
			'id-id': "Mencabuti"
		},

		effect: {
			'ja-jp': "相手の手札からオモテを見ないで2枚選び、そのカードのオモテを見て、相手の山札にもどして切る。",
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇2張，查看那些卡的正面後放回對手的牌庫並重洗。",
			'th-th': "เลือกการ์ด 2 ใบจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด หลังจากดูหน้าการ์ดนั้นแล้ว ใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ",
			'id-id': "Pilih 2 kartu dari Kartu Pegangan lawan tanpa melihat sisi depan, lihat sisi depan kartu tersebut, lalu kocok kembali ke Deck lawan."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'ja-jp': "かみなり",
			'zh-tw': "打雷",
			'th-th': "ฟ้าผ่า",
			'id-id': "Guntur"
		},

		damage: 120,

		effect: {
			'ja-jp': "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693107,
				tcgplayer: 568258,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card