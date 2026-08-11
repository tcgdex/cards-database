import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シママ",
		'zh-tw': "斑斑馬",
		'th-th': "ชิมามา",
		'ko-kr': "줄뮤마"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [522],
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "放電すると たてがみが 光る。 たてがみが 輝く 回数や リズムで 仲間と 会話している。",
		'zh-tw': "放電時鬃毛會發光。利用鬃毛閃爍的次數及節奏與夥伴交談。",
		'th-th': "เมื่อปล่อยไฟฟ้าออกมาแผงขนบนหัวจะเปล่งแสง พูดคุยสื่อสารกับพวกพ้องด้วยจำนวนครั้งหรือจังหวะการเปล่งแสงของแผงขนบนหัว",
		'ko-kr': "방전하면 갈기가 빛난다. 갈기가 빛나는 횟수나 리듬으로 동료와 대화한다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "うしろげり",
			'zh-tw': "後踢",
			'th-th': "เตะกลับหลัง",
			'ko-kr': "뒤로 차기"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ワイルドボルト",
			'zh-tw': "瘋狂伏特",
			'th-th': "ไวลด์โวลต์",
			'ko-kr': "와일드볼트"
		},

		damage: 50,

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
				cardmarket: 741850,
				tcgplayer: 565983,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card