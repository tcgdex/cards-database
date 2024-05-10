import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ルクシオ",
		'zh-tw': "勒克貓",
		th: "ลุคซิโอ",
		id: "Luxio"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [404],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "鋭い ツメの 先には 強い 電気が 流れており ほんの少し かするだけで 敵を 気絶させる。",
		'zh-tw': "在銳利的爪子尖端有強烈的電流流過，只要稍微擦到， 就能讓敵人暈厥。",
		th: "ที่ปลายเล็บอันแหลมคมจะมีไฟฟ้าแรงสูงไหลผ่านอยู่ เพียงแค่เฉี่ยวโดนก็ทำให้ฝ่ายตรงข้ามหมดสติได้",
		id: "Di ujung kuku tajam Luxio, mengalir arus listrik yang sangat kuat dan dapat membuat lawannya pingsan hanya dengan sedikit goresan kukunya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "エレキック",
			'zh-tw': "電氣踢",
			th: "ลูกเตะไฟฟ้า",
			id: "Electric Kick"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ヘッドボルト",
			'zh-tw': "伏特頭擊",
			th: "เฮดโบลท์",
			id: "Head Bolt"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card