import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "モンジャラ",
		'zh-tw': "蔓藤怪",
		'th-th': "มอนจารา"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [114],
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "ちぎれても 無限に 伸びる ツルの 奥の 正体は いまだ 解明されていない。",
		'zh-tw': "藤蔓即使斷了也會繼續無限地生長。藤蔓下的 真面目至今仍是個謎。",
		'th-th': "แม้เถาวัลย์จะขาดก็ยืดยาวออกมาได้ไม่มีที่สิ้นสุด ตัวตนลึก ๆ ที่แท้จริงของมัน จนทุกวันนี้ก็ยังพิสูจน์ไม่ได้"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ひっぱたく",
			'zh-tw': "重摑",
			'th-th': "ตบแรง"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "つるでうつ",
			'zh-tw': "藤蔓攻擊",
			'th-th': "โจมตีด้วยเถาวัลย์"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761461,
				tcgplayer: 566056,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
}

export default card