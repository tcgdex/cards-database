import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ダークライ",
		'zh-tw': "達克萊伊",
		th: "ดาร์กไร"
	},

	illustrator: "Bun Toujo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [491],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "人々を 深い 眠りに 誘い 夢を 見せる 能力を 持つ。 新月の 夜に 活動する。",
		'zh-tw': "有著引誘人們進入深層睡眠，並使其作夢的能力。會在新月之夜活動。",
		th: "มีพลังชักชวนให้มนุษย์หลับลึกและฝัน จะออกปฏิบัติการในคืนเดือนมืด"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "くろいまどろみ",
			'zh-tw': "黑色微寐",
			th: "เคลิ้มหลับในความมืด"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ナイトサイクロン",
			'zh-tw': "暗黑旋風",
			th: "ไนท์ไซโคลน"
		},

		damage: 120,

		effect: {
			ja: "このポケモンについているエネルギーをすべて、ベンチポケモンに好きなようにつけ替える。",
			'zh-tw': "將這隻寶可夢身上附加的所有能量卡，以任意方式改附於備戰寶可夢身上。",
			th: "นำพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมด ย้ายไปติดกับโปเกมอนบนเบนช์ตามชอบ"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card