import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ハラバリー",
		'zh-tw': "電肚蛙",
		'th-th': "ฮาราบารี"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [939],
	hp: 140,
	types: ["Lightning"],

	description: {
		'ja-jp': "ブヨンブヨンの 体を 伸び縮み させると お腹の へそダイナモが 大電力を 発生させる。",
		'zh-tw': "只要伸縮肥嘟嘟的身體，就能讓肚子上的發電臍產生大量的電氣。",
		'th-th': "เมื่อยืดและหดร่างกายที่ยืดหยุ่น สะดือไดนาโมตรงท้องจะผลิตพลังงานไฟฟ้าจำนวนมากออกมา"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ぜつえんたい",
			'zh-tw': "絕緣體",
			'th-th': "ฉนวนไฟฟ้า"
		},

		effect: {
			'ja-jp': "このポケモンは、相手のポケモンからワザのダメージを受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的【雷】寶可夢招式的傷害。",
			'th-th': "โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอน[สายฟ้า]ฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'ja-jp': "サンダーエッジ",
			'zh-tw': "雷電刀鋒",
			'th-th': "ธันเดอร์เอดจ์"
		},

		damage: 100,

		effect: {
			'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			'th-th': "แดเมจของท่าต่อสู้นี้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด"
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
				cardmarket: 723982,
				tcgplayer: 566995,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card