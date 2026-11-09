import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ルクシオ",
		'zh-tw': "勒克貓",
		th: "ลุคซิโอ",
		id: "Luxio"
	},

	illustrator: "Narumi Sato",
	rarity: "None",
	category: "Pokemon",
	dexId: [404],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		ja: "コリンク"
	},

	description: {
		ja: "鋭い ツメの 先には 強い 電気が 流れており ほんの少し かするだけで 敵を 気絶させる。",
		'zh-tw': "在銳利的爪子尖端有強烈的電流流過，只要稍微擦到， 就能讓敵人暈厥。",
		th: "ที่ปลายเล็บอันแหลมคมจะมีไฟฟ้าแรงสูงไหลผ่านอยู่ เพียงแค่เฉี่ยวโดนก็ทำให้ฝ่ายตรงข้ามหมดสติได้",
		id: "Di ujung cakar tajam Luxio, mengalir arus listrik yang sangat kuat sehingga dapat membuat musuhnya pingsan hanya dengan sedikit goresan cakarnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "エレキック",
			'zh-tw': "電氣踢",
			th: "ลูกเตะไฟฟ้า",
			id: "Electric Kick"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			ja: "ヘッドボルト",
			'zh-tw': "伏特頭擊",
			th: "เฮดโบลต์",
			id: "Head Bolt"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746442,
				tcgplayer: 567440,
				cardtrader: 269677,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577328,
			},
		},
	]
}

export default card