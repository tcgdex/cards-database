import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バオップ",
		'zh-tw': "爆香猴",
		th: "บาอปปุ",
		ko: "바오프"
	},

	illustrator: "LINNE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [513],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "火山の 洞穴で 暮らす。 頭の ふさの 中が 燃えていて ３００度の 高温になる。",
		'zh-tw': "在火山的洞穴裡生活。頭上的毛髮叢中熊熊燃燒著，溫度高達３００度。",
		th: "อาศัยอยู่ตามถ้ำภูเขาไฟ ข้างในหงอนบนหัวจะลุกไหม้จนมีอุณหภูมิสูง 300 องศา",
		ko: "화산 동굴에서 산다. 머리의 송아리 속이 불타고 있어 300도나 되는 높은 온도가 된다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なかまをよぶ",
			'zh-tw': "呼朋引伴",
			th: "เรียกเพื่อน",
			ko: "동료부르기"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			ko: "자신의 덱에서 기본 포켓몬을 1장 선택해서 벤치로 내보낸다. 그리고 덱을 섞는다."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "やきこがす",
			'zh-tw': "灼燒",
			th: "เพลิงประลัยกัลป์",
			ko: "태워그을리기"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			ko: "상대의 배틀 포켓몬을 화상으로 만든다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741836
	}
}

export default card