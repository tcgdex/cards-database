import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カイロス",
		'zh-tw': "凱羅斯",
		'th-th': "ไคลอส"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [127],
	hp: 110,
	types: ["Grass"],

	description: {
		'ja-jp': "ツノで 互いを 格付けする。 太く 立派な ツノを 持つ カイロスほど 異性に 人気。",
		'zh-tw': "會以角來判斷彼此的地位。凱羅斯的角越是粗壯氣派， 就越能得到異性的愛戴。",
		'th-th': "จะจัดลำดับของกันและกันตามขนาดของเขา ไคลอสที่มีเขาใหญ่งามสง่าจะเป็นที่ชื่นชอบของเพศตรงข้าม"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "スロークランチ",
			'zh-tw': "慢嚼碎",
			'th-th': "สโลว์ครันช์"
		},

		effect: {
			'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。次の相手の番の終わりに、このワザを受けたポケモンはきぜつする。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。在下個對手的回合結束時，受到這個招式的寶可夢會【昏厥】。",
			'th-th': "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ ทั้งหมดที่ตำแหน่งทิ้งการ์ด เมื่อจบเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะ[หมดสภาพ]"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'ja-jp': "かいりきホーン",
			'zh-tw': "怪力角擊",
			'th-th': "เขามหากาฬ"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761463,
				tcgplayer: 566058,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
}

export default card