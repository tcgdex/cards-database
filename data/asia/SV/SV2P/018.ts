import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ラブカス",
		'zh-tw': "愛心魚",
		'th-th': "เลิฟคัส",
		'id-id': "Luvdisc"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [370],
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "ハートの 形が 大人気。 好きな 人に ラブカスを 贈る 風習の 残る 土地が ある。",
		'zh-tw': "心形的外型很受歡迎。有些地方仍留有送愛心魚 給心上人的習俗。",
		'th-th': "ลำตัวทรงหัวใจเป็นที่นิยมมาก บางพื้นที่ยังมีธรรมเนียมส่งเลิฟคัสให้คนที่ชอบหลงเหลืออยู่",
		'id-id': "Tubuhnya yang berbentuk hati sangat populer. Ada beberapa daerah yang masih menganut adat untuk mengirim Luvdisc ke orang yang disukai."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "マッチング",
			'zh-tw': "匹配",
			'th-th': "จับคู่",
			'id-id': "Matching"
		},

		effect: {
			'ja-jp': "自分の山札からサポートを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'th-th': "เลือกการ์ดซัพพอร์ตได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			'id-id': "Pilih paling banyak 2 lembar Supporter dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			'ja-jp': "みずのはどう",
			'zh-tw': "水之波動",
			'th-th': "คลื่นน้ำ",
			'id-id': "Aura Air"
		},

		damage: 20,

		effect: {
			'ja-jp': "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705251,
				tcgplayer: 567775,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card