import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哈克龍",
		'th-th': "ฮาคุริว",
		'ja-jp': "ハクリュー"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		'zh-tw': "棲息在清澈的海洋或湖泊。能利用操縱天氣的力量， 乘著風升上天空。",
		'th-th': "อาศัยอยู่ตามทะเลหรือทะเลสาบที่สวยสะอาด ใช้พลังควบคุมสภาพอากาศขี่ลมแล้วบินขึ้นท้องฟ้า",
		'ja-jp': "きれいな 海や 湖に 棲む。 天候を 操る 力で 風に 乗り 空へと 昇る。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "緊束",
			'th-th': "รัด",
			'ja-jp': "まきつく"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'th-th': "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "衝浪",
			'th-th': "โต้คลื่น",
			'ja-jp': "なみのり"
		},

		damage: 80,
		cost: ["Water", "Lightning", "Colorless"]
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680210,
				tcgplayer: 570129,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [148],
}

export default card