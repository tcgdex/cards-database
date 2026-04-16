import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゼクロム",
		'zh-tw': "捷克羅姆",
		th: "เซครอม"
	},

	illustrator: "Shiburingaru",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [644],
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "尻尾で 電気を 作り出す。 全身を 雷雲に 隠して イッシュ地方の 空を 飛ぶ。",
		'zh-tw': "用尾巴製造電能。 將全身藏在雷雲裡， 在合眾地區的上空飛行。",
		th: "สร้างไฟฟ้าจากหาง จะซ่อนตัวในเมฆฝนฟ้าคะนอง แล้วบินไปบนท้องฟ้าของภูมิภาคอิชชู"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "クラッシュショート",
			'zh-tw': "粉碎短路",
			th: "แครชช็อต"
		},

		damage: 20,

		effect: {
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡丟棄。",
			th: "ก่อนจะทำแดเมจ ทิ้ง [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "らくらい",
			'zh-tw': "落雷",
			th: "สายฟ้าฟาด"
		},

		damage: 130,

		effect: {
			ja: "自分のベンチポケモン1匹にも、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的1隻備戰寶可夢也受到40點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว ก็จะได้รับแดเมจ 40 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 734257
	}
}

export default card