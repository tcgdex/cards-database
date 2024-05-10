import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノカイナex",
		th: "แขนเหล็กex"
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
			ja: "アームプレス",
			th: "อาร์มเพรส"
		},

		damage: 160
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ごっつあんプリファイ",
			th: "เครื่องขยายขอบใจหลาย"
		},

		damage: 120,

		effect: {
			ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、サイドを1枚多くとる。",
			th: "ถ้าโปเกมอนฝ่ายตรงข้าม[หมดสภาพ] ด้วยแดเมจของท่าต่อสู้นี้แล้ว หยิบการ์ดรางวัลเพิ่ม 1 ใบ"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card