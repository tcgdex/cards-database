import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤナップ",
		'zh-tw': "花椰猴",
		'th-th': "ยานัปปุ",
		'ko-kr': "야나프"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [511],
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "木の実を 探すのが 上手で あちこちで 集めて 仲間に 分け与える 優しさを 持つ。",
		'zh-tw': "擅長尋找樹果，有著四處收集樹果 與夥伴分享的體貼之心。",
		'th-th': "หาผลไม้เก่ง และมีนิสัยเอื้อเฟื้อเผื่อแผ่ขนาดที่หลังจากรวบรวมผลไม้จากที่ต่าง ๆ ได้ จะแบ่งให้กับพวกพ้องด้วย",
		'ko-kr': "나무열매를 잘 찾아 여기저기에서 모아 동료에게 나누어 주는 상냥함을 가졌다."
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
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'ja-jp': "やどりぎのタネ",
			'zh-tw': "寄生種子",
			'th-th': "เมล็ดกาฝาก",
			'ko-kr': "씨뿌리기"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンのHPを「10」回復する。",
			'zh-tw': "將這隻寶可夢恢復「10」HP。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [10]",
			'ko-kr': "이 포켓몬의 HP를 「10」회복한다."
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
				cardmarket: 741192,
				tcgplayer: 565756,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card