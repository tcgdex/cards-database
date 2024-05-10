import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ストリンダー",
		'zh-tw': "顫弦蠑螈",
		th: "สตรินเดอร์",
		id: "Toxtricity"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [849],
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "荒々しく 胸もとの 突起を かき鳴らして 放つ 電撃は １５０００ボルトを 軽く 超える。",
		'zh-tw': "會激烈地彈奏胸部的突起物。彈奏時釋放出的電擊， 可以輕易超過１５０００伏特。",
		th: "กระแสไฟฟ้าที่ส่งออกมาจากการเกาส่วนนูนที่อกอย่างรุนแรงมีแรงดันสูงกว่า 15000 โวลต์",
		id: "Kekuatan listrik yang dihasilkan dengan cara Toxtricity memetik tonjolan yang ada di dadanya secara kasar dengan mudah melampaui 15 ribu volt."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "むしりとる",
			'zh-tw': "拔除",
			th: "เด็ดออก",
			id: "Mencabuti"
		},

		effect: {
			ja: "相手の手札からオモテを見ないで2枚選び、そのカードのオモテを見て、相手の山札にもどして切る。",
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇2張，查看那些卡的正面後放回對手的牌庫並重洗。",
			th: "เลือกการ์ด 2 ใบจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด หลังจากดูหน้าการ์ดนั้นแล้ว ใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ",
			id: "Pilih 2 kartu dari Kartu Pegangan lawan tanpa melihat sisi depan, lihat sisi depan kartu tersebut, lalu kocok kembali ke Deck lawan."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "かみなり",
			'zh-tw': "打雷",
			th: "ฟ้าผ่า",
			id: "Guntur"
		},

		damage: 120,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card