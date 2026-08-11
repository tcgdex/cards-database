import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "バオップ",
		'zh-tw': "爆香猴",
		'th-th': "บาอปปุ",
		'ko-kr': "바오프"
	},

	illustrator: "LINNE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [513],
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "火山の 洞穴で 暮らす。 頭の ふさの 中が 燃えていて ３００度の 高温になる。",
		'zh-tw': "在火山的洞穴裡生活。頭上的毛髮叢中熊熊燃燒著，溫度高達３００度。",
		'th-th': "อาศัยอยู่ตามถ้ำภูเขาไฟ ข้างในหงอนบนหัวจะลุกไหม้จนมีอุณหภูมิสูง 300 องศา",
		'ko-kr': "화산 동굴에서 산다. 머리의 송아리 속이 불타고 있어 300도나 되는 높은 온도가 된다."
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
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'ja-jp': "やきこがす",
			'zh-tw': "灼燒",
			'th-th': "เพลิงประลัยกัลป์",
			'ko-kr': "태워그을리기"
		},

		damage: 20,

		effect: {
			'ja-jp': "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			'ko-kr': "상대의 배틀 포켓몬을 화상으로 만든다."
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
				cardmarket: 741836,
				tcgplayer: 565970,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card