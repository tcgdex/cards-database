import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咚咚鼠",
		'th-th': "เดเด็นเนะ",
		'ja-jp': "デデンネ"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "能用鬍鬚接收來自夥伴們的電波，藉此向彼此分享 哪裡有食物或電力。",
		'th-th': "ใช้หนวดจับคลื่นสัญญาณที่พวกพ้องปล่อยออกมา ทุกตัวจะแบ่งปันตำแหน่งของอาหารและไฟฟ้าให้กัน",
		'ja-jp': "仲間の 放つ 電波を ヒゲで キャッチ。 エサや 電気の ありかを みんなで シェアするのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "尾擊",
			'th-th': "ฟาดหาง",
			'ja-jp': "しっぽでたたく"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咚咚短路",
			'th-th': "เดเดช็อต",
			'ja-jp': "デデショート"
		},

		effect: {
			'zh-tw': "這個招式必須在上個自己的回合「托戈德瑪爾」使用了「托戈衝刺」才可使用。將對手的戰鬥寶可夢【麻痺】。",
			'th-th': "ท่าต่อสู้นี้ ในเทิร์นก่อนของฝ่ายเรา ถ้า [โทเกะเดมารุ] ไม่ได้ใช้ [โทเกะแดช] จะใช้ไม่ได้ ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'ja-jp': "このワザは、前の自分の番に「トゲデマル」が「トゲダッシュ」を使っていなければ使えない。相手のバトルポケモンをマヒにする。"
		},

		damage: 60,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680184,
				tcgplayer: 570103,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [702],
}

export default card