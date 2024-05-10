import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ラブカス",
		'zh-tw': "愛心魚",
		th: "เลิฟคัส",
		id: "Luvdisc"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [370],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ハートの 形が 大人気。 好きな 人に ラブカスを 贈る 風習の 残る 土地が ある。",
		'zh-tw': "心形的外型很受歡迎。有些地方仍留有送愛心魚 給心上人的習俗。",
		th: "ลำตัวทรงหัวใจเป็นที่นิยมมาก บางพื้นที่ยังมีธรรมเนียมส่งเลิฟคัสให้คนที่ชอบหลงเหลืออยู่",
		id: "Tubuhnya yang berbentuk hati sangat populer. Ada beberapa daerah yang masih menganut adat untuk mengirim Luvdisc ke orang yang disukai."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "マッチング",
			'zh-tw': "匹配",
			th: "จับคู่",
			id: "Matching"
		},

		effect: {
			ja: "自分の山札からサポートを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดซัพพอร์ตได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 2 lembar Supporter dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "みずのはどう",
			'zh-tw': "水之波動",
			th: "คลื่นน้ำ",
			id: "Aura Air"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card