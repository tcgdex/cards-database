import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "タイカイデン",
		'zh-tw': "大電海燕",
		'th-th': "ไทไคเด็น",
		'id-id': "Kilowattrel"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	dexId: [941],
	hp: 120,
	types: ["Lightning"],

	description: {
		'ja-jp': "のど袋を ふくらませて 電気を 増幅させる。 風に 乗って １日で ７００キロを 飛行する。",
		'zh-tw': "會膨脹喉囊來增強電力。可以乘著風在１天內 就飛上７００公里。",
		'th-th': "พองถุงคอเพื่อเพิ่มกระแสไฟฟ้า โบยบินตามสายลมเป็นระยะทาง 700 กิโลเมตรใน 1 วัน",
		'id-id': "Kilowattrel menggembungkan kantong tenggorokannya dan menambahkan daya listriknya. Pokémon ini menaiki angin dan terbang sejauh 700 km dalam sehari."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "だんけつサンダー",
			'zh-tw': "團結閃電",
			'th-th': "ฟ้าคำรามสามัคคี",
			'id-id': "Guntur Bersatu Padu"
		},

		effect: {
			'ja-jp': "相手のベンチポケモン1匹に、自分のトラッシュにある、ワザ「だんけつのつばさ」を持つポケモンの枚数×10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢受到自己的棄牌區的，持有「團結之翼」招式的寶可夢卡的張數×10點傷害。[在備戰區不計算弱點・抵抗力。]",
			'th-th': "ทำแดเมจกับโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว เท่ากับจำนวนการ์ดโปเกมอนที่มีท่าต่อสู้ [ปีกสามัคคี] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา x10 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lembar Pokémon yang memiliki serangan Sayap Bersatu Padu yang ada di Trash sendiri kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'ja-jp': "スピードウイング",
			'zh-tw': "高速之翼",
			'th-th': "สปีดวิง",
			'id-id': "Speed Wing"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746452,
				tcgplayer: 567458,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577334,
			},
		},
	],

	retreat: 0,
	regulationMark: "G"
}

export default card