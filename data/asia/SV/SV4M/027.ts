import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "テツノカイナex",
		'zh-tw': "鐵臂膀ex",
		'th-th': "แขนเหล็กex",
		'ko-kr': "무쇠손 ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'ja-jp': "アームプレス",
			'zh-tw': "臂壓制",
			'th-th': "อาร์มเพรส",
			'ko-kr': "암프레스"
		},

		damage: 160
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ごっつあんプリファイ",
			'zh-tw': "感激放大",
			'th-th': "เครื่องขยายขอบใจหลาย",
			'ko-kr': "감사 앰플리파이"
		},

		damage: 120,

		effect: {
			'ja-jp': "このワザのダメージで、相手のポケモンがきぜつしたなら、サイドを1枚多くとる。",
			'zh-tw': "若對手的寶可夢因這個招式的傷害而【昏厥】了，則多獲得1張獎賞卡。",
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
				cardmarket: 741854,
				tcgplayer: 565987,
			},
		},
	],

	retreat: 4,
	regulationMark: "G"
}

export default card