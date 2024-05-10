import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴースト",
		'zh-tw': "鬼斯通",
		th: "โกสท์",
		'zh-cn': "鬼斯通"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	dexId: [93],
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "暗闇にまぎれ ガスの手を 伸ばし 人の肩を 叩くのが 好き。 触られると 震えが 止まらない。",
		'zh-tw': "喜歡躲在黑暗中伸出氣體構成的手去拍人的肩膀。 一旦被接觸到，身體便會抖個不停。",
		th: "ชอบซ่อนตัวในความมืดแล้วยื่นมือที่เป็นแก๊สไปตีไหล่คนเล่น ถ้าโดนเข้าจะตัวสั่นไม่หยุด",
		'zh-cn': "喜歡躲在黑暗中伸出氣體構成的手去拍人的肩膀。 一旦被接觸到，身體便會抖個不停。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "どくのいき",
			'zh-tw': "毒之氣息",
			th: "ลมหายใจพิษ",
			'zh-cn': "毒之氣息"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			'zh-cn': "將對手的戰鬥寶可夢【中毒】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card