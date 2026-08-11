import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "トロピウス",
		'zh-tw': "熱帶龍",
		'th-th': "โทรพิอุส",
		'id-id': "Tropius"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [357],
	hp: 110,
	types: ["Grass"],

	description: {
		'ja-jp': "熱帯の ジャングルに 生息。 首の フサは 甘くて 美味しい。 １年に ２回 実を つける。",
		'zh-tw': "棲息在熱帶叢林裡。脖子上的果實香甜美味。 每年會結果２次。",
		'th-th': "อาศัยอยู่ในป่าเขตร้อน เครือผลที่คอรสชาติหวานอร่อย 1 ปีจะออกผลแค่ 2 ครั้ง",
		'id-id': "Tropius hidup di hutan tropis. Tandan di leher Pokémon ini rasanya manis dan lezat, dan berbuah 2 kali dalam 1 tahun."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "リーフドレイン",
			'zh-tw': "綠葉吸取",
			'th-th': "ลีฟเดรน",
			'id-id': "Leaf Drain"
		},

		damage: 20,

		effect: {
			'ja-jp': "このポケモンのHPを「20」回復する。",
			'zh-tw': "將這隻寶可夢恢復「20」HP。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [20]",
			'id-id': "Pulihkan HP Pokémon ini sejumlah 20."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'ja-jp': "なんごくのかぜ",
			'zh-tw': "南國之風",
			'th-th': "สายลมจากแดนใต้",
			'id-id': "Angin Tropis"
		},

		damage: 130,

		effect: {
			'ja-jp': "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡，全部改附於1隻備戰寶可夢身上。",
			'th-th': "นำพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมด ย้ายไปติดกับโปเกมอนบนเบนช์ 1 ตัว",
			'id-id': "Pindahkan semua Energi yang dikenakan pada Pokémon ini ke 1 Pokémon Cadangan."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701036,
				tcgplayer: 568124,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card