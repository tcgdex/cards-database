import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ラティオス",
		'zh-tw': "拉帝歐斯",
		th: "ลาทิโอส"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [381],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "高い 知能を 持ち 人間の 言葉を 理解する。 争いを 嫌う 優しい ポケモンだ。",
		'zh-tw': "擁有很高的智慧，能理解人類的語言。 是厭惡爭鬥的溫柔寶可夢。",
		th: "มีสติปัญญาสูงและเข้าใจภาษามนุษย์ เป็นโปเกมอนใจดีที่เกลียดการต่อสู้"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かっくう",
			'zh-tw': "滑翔",
			th: "ถลาลม"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "ラスターパージ",
			'zh-tw': "潔淨光芒",
			th: "ลัสเตอร์เพิร์จ"
		},

		damage: 180,

		effect: {
			ja: "このポケモンについているエネルギーを3個選び、トラッシュする。",
			'zh-tw': "選擇3個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 3 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741340
	}
}

export default card