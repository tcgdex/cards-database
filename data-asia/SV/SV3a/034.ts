import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴースト",
		'zh-tw': "鬼斯通",
		th: "โกสท์"
	},

	illustrator: "DOM",
	rarity: "Common",
	category: "Pokemon",
	dexId: [93],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "暗闇にまぎれ ガスの手を 伸ばし 人の肩を 叩くのが 好き。 触られると 震えが 止まらない。",
		'zh-tw': "喜歡躲在黑暗中伸出氣體構成的手去拍人的肩膀。 一旦被接觸到，身體便會抖個不停。",
		th: "ชอบซ่อนตัวในความมืดแล้วยื่นมือที่เป็นแก๊สไปตีไหล่คนเล่น ถ้าโดนเข้าจะตัวสั่นไม่หยุด"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "くろいまどろみ",
			'zh-tw': "黑色微寐",
			th: "เคลิ้มหลับในความมืด"
		},

		damage: 40,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 734273
	}
}

export default card