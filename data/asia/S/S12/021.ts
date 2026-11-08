import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪妖女",
		'th-th': "ยูกิเมโนโกะ",
		'ja-jp': "ユキメノコ"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "在雪山中遇難的女性的遺恨讓這隻寶可夢誕生。 牠最喜歡凍成冰的靈魂。",
		'th-th': "โปเกมอนที่เกิดมาจากความเจ็บแค้นของหญิงสาวที่เสียชีวิตบนภูเขาหิมะ ชอบกินวิญญาณที่ถูกแช่แข็ง",
		'ja-jp': "雪山で 亡くなった 女の 無念から 生まれた ポケモン。 凍らせた 魂が 好物。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "雪之牢獄",
			'th-th': "เรือนจำหิมะ",
			'ja-jp': "ゆきのろうごく"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了「小菘」，則增加90點傷害，並將對手的戰鬥寶可夢【麻痺】。",
			'th-th': "เทิร์นนี้ ถ้านำการ์ด [ซุซุนะ] จากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 90 และทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'ja-jp': "この番、手札から「スズナ」を出して使っていたなら、90ダメージ追加し、相手のバトルポケモンをマヒにする。"
		},

		damage: "20＋",
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "冰息",
			'th-th': "ลมหายใจเยือกแข็ง",
			'ja-jp': "こおりのいぶき"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680160,
				tcgplayer: 570079,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [478],
}

export default card