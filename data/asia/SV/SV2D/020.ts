import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ルクシオ",
		'zh-tw': "勒克貓",
		'th-th': "ลุคซิโอ",
		'id-id': "Luxio"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [404],
	hp: 90,
	types: ["Lightning"],

	description: {
		'ja-jp': "鋭い ツメの 先には 強い 電気が 流れており ほんの少し かするだけで 敵を 気絶させる。",
		'zh-tw': "在銳利的爪子尖端有強烈的電流流過，只要稍微擦到， 就能讓敵人暈厥。",
		'th-th': "ที่ปลายเล็บอันแหลมคมจะมีไฟฟ้าแรงสูงไหลผ่านอยู่ เพียงแค่เฉี่ยวโดนก็ทำให้ฝ่ายตรงข้ามหมดสติได้",
		'id-id': "Di ujung kuku tajam Luxio, mengalir arus listrik yang sangat kuat dan dapat membuat lawannya pingsan hanya dengan sedikit goresan kukunya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "エレキック",
			'zh-tw': "電氣踢",
			'th-th': "ลูกเตะไฟฟ้า",
			'id-id': "Electric Kick"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ヘッドボルト",
			'zh-tw': "伏特頭擊",
			'th-th': "เฮดโบลท์",
			'id-id': "Head Bolt"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705324,
				tcgplayer: 565882,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card