import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉艾勒奇V",
		'th-th': "เรจิเอเลคิV",
		'ja-jp': "レジエレキV"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "切換伏特",
			'th-th': "สายฟ้าสับเปลี่ยน",
			'ja-jp': "スイッチボルト"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			'th-th': "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			'ja-jp': "このポケモンをベンチポケモンと入れ替える。"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "雷電堡壘",
			'th-th': "ไลท์นิงวอล",
			'ja-jp': "ライトニングウォール"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-100」點。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับ จะถูก [-100]",
			'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-100」される。"
		},

		damage: 100,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 680172,
				tcgplayer: 570091,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card