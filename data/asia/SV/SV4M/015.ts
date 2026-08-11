import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒヤップ",
		'zh-tw': "冷水猴",
		'th-th': "ฮิยัปปุ",
		'ko-kr': "앗차프"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [515],
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "頭の ふさに ためた 水は 栄養 たっぷり。 植物に かけると 大きく 育つのだ。",
		'zh-tw': "頭上的毛髮叢裡儲藏的水充滿營養。如果拿來灌溉，植物就會茁壯成長。",
		'th-th': "น้ำที่สะสมไว้ในหงอนบนหัวเต็มเปี่ยมไปด้วยสารอาหาร เมื่อนำไปรดต้นไม้จะทำให้โตขึ้น",
		'ko-kr': "머리의 송아리에 모은 물은 영양이 가득하다. 식물에 뿌려주면 크게 자란다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "なかまをよぶ",
			'zh-tw': "呼朋引伴",
			'th-th': "เรียกเพื่อน",
			'ko-kr': "동료부르기"
		},

		effect: {
			'ja-jp': "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			'th-th': "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			'ko-kr': "자신의 덱에서 기본 포켓몬을 1장 선택해서 벤치로 내보낸다. 그리고 덱을 섞는다."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "みずのはどう",
			'zh-tw': "水之波動",
			'th-th': "คลื่นน้ำ",
			'ko-kr': "물의파동"
		},

		damage: 30,

		effect: {
			'ja-jp': "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			'ko-kr': "상대의 배틀 포켓몬을 잠듦으로 만든다."
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
				cardmarket: 741842,
				tcgplayer: 565975,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card