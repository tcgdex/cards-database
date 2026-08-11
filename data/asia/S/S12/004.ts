import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蔓藤怪",
		'th-th': "มอนจารา",
		'ja-jp': "モンジャラ"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "藤蔓即使斷了也會繼續無限地生長。藤蔓下的 真面目至今仍是個謎。",
		'th-th': "แม้เถาวัลย์จะขาดก็ยืดยาวออกมาได้ไม่มีที่สิ้นสุด ตัวตนลึก ๆ ที่แท้จริงของมัน จนทุกวันนี้ก็ยังพิสูจน์ไม่ได้",
		'ja-jp': "ちぎれても 無限に 伸びる ツルの 奥の 正体は いまだ 解明されていない。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "敲擊",
			'th-th': "ตี",
			'ja-jp': "たたく"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "藤鞭",
			'th-th': "แส้เถาวัลย์",
			'ja-jp': "つるのムチ"
		},

		damage: 60,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680143,
				tcgplayer: 570062,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [114],
}

export default card