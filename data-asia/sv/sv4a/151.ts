import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パフュートン",
		'zh-tw': "飄香豚",
		th: "เพอร์ฟูตง",
		id: "Oinkologne"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	dexId: [916],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "花のような 香りを 振りまく。 筋肉が 発達した 脚は 軽く ５メートルを 飛び越える。",
		'zh-tw': "會釋放出如花般的香氣。腿部肌肉發達，要跳超過５公尺高也是輕而易舉。",
		th: "โปรยกลิ่นหอมดั่งดอกไม้ ขาที่มีกล้ามเนื้อที่พัฒนาแล้วสามารถกระโดดสูงกว่า 5 เมตรได้อย่างง่ายดาย",
		id: "Oinkologne menyebarkan wangi semerbak layaknya bunga. Otot kakinya yang telah berkembang membuat Pokémon ini melompat setinggi lebih dari 5 m dengan mudahnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "えりすぐり",
			'zh-tw': "特優",
			th: "คัดสรรอย่างดี",
			id: "Pilihan Terbaik"
		},

		effect: {
			ja: "コインを3回投げ、オモテの数ぶんまで、自分のトラッシュから好きなカードを選び、相手に見せて、手札に加える。",
			'zh-tw': "擲3次硬幣，從自己的棄牌區任意選擇最多與正面出現的次數相同數量的卡，在給對手看過後加入手牌。",
			th: "ทอยเหรียญ 3 ครั้ง เลือกการ์ดที่ชอบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ได้สูงสุดไม่เกินจำนวนครั้งที่ออกหัว ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
			id: "Lempar koin 3 kali. Pilih kartu sesukanya dari Trash sendiri paling banyak sejumlah lemparan dengan hasil sisi depan, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "パフュームプレス",
			'zh-tw': "芬香壓制",
			th: "เพอร์ฟูมเพรส",
			id: "Perfume Press"
		},

		damage: 70,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
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