import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "エレザード",
		'zh-tw': "光電傘蜥",
		'th-th': "เอเลซาร์ด"
	},

	illustrator: "Atsuya Uki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [695],
	hp: 100,
	types: ["Lightning"],

	description: {
		'ja-jp': "かつて 滅びた 砂漠の 国で 大事に されていた。 財宝と ともに ガラル地方へ やってきた。",
		'zh-tw': "在如今已滅亡的沙漠之國曾經是人們珍視的對象。 和財寶一起來到了伽勒爾地區。",
		'th-th': "ได้รับการประคบประหงมในดินแดนแห่งทะเลทรายที่ล่มสลายไปแล้วครั้งหนึ่งในอดีต มายังภูมิภาคกาลาร์พร้อมกับทรัพย์สมบัติ"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "ワイルドボルト",
			'zh-tw': "瘋狂伏特",
			'th-th': "ไวลด์โวลต์"
		},

		damage: 70,

		effect: {
			'ja-jp': "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761489,
				tcgplayer: 566084,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
}

export default card