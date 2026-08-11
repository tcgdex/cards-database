import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "テツノカイナex",
		'th-th': "แขนเหล็กex",
		'ko-kr': "무쇠손 ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'ja-jp': "アームプレス",
			'th-th': "อาร์มเพรส",
			'ko-kr': "암프레스"
		},

		damage: 160
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ごっつあんプリファイ",
			'th-th': "เครื่องขยายขอบใจหลาย",
			'ko-kr': "감사 앰플리파이"
		},

		damage: 120,

		effect: {
			'ja-jp': "このワザのダメージで、相手のポケモンがきぜつしたなら、サイドを1枚多くとる。",
			'th-th': "ถ้าโปเกมอนฝ่ายตรงข้าม[หมดสภาพ] ด้วยแดเมจของท่าต่อสู้นี้แล้ว หยิบการ์ดรางวัลเพิ่ม 1 ใบ"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741906,
				tcgplayer: 566039,
			},
		},
	],

	retreat: 4,
	regulationMark: "G"
}

export default card