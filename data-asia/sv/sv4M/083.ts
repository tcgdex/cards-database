import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "チルタリスex",
		th: "ทิลทาลิสex"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ハミングヒール",
			th: "ฮัมมิงฮีล"
		},

		effect: {
			ja: "自分の番に1回使える。自分のポケモン全員のHPを、それぞれ「20」回復する。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [20]"
		}
	}],

	attacks: [{
		cost: ["Water", "Metal"],

		name: {
			ja: "ひかりのはどう",
			th: "คลื่นแสง"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、このポケモンは相手のポケモンが使うワザの効果を受けない。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอนฝ่ายตรงข้ามใช้"
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card