import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ゼラオラ",
		'id-id': "Zeraora",
		'th-th': "เซราโอรา",
		'zh-tw': "捷拉奧拉",
		'zh-cn': "捷拉奧拉"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "None",
	category: "Pokemon",
	dexId: [807],
	hp: 120,
	types: ["Lightning"],

	description: {
		'ja-jp': "雷に 匹敵する スピードで 走り 大電圧を 発する ツメで 敵を 八つ裂きにする。",
		'id-id': "Zeraora berlari secepat kilat dan mencabik-cabik musuhnya dengan cakar yang memancarkan listrik bertegangan tinggi.",
		'th-th': "วิ่งด้วยความเร็วที่เทียบเท่าฟ้าแลบแล้วเข้าฉีกกระชากศัตรูด้วยกรงเล็บที่ปล่อยไฟฟ้าแรงสูง",
		'zh-tw': "以媲美閃電的速度奔跑， 用能釋放高壓電的爪子 將敵人撕得粉碎。",
		'zh-cn': "以媲美閃電的速度奔跑， 用能釋放高壓電的爪子 將敵人撕得粉碎。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'ja-jp': "コンバットサンダー",
			'id-id': "Combat Thunder",
			'th-th': "คอมแบตธันเดอร์",
			'zh-tw': "鬥戰雷電",
			'zh-cn': "鬥戰雷電"
		},

		damage: "20+",

		effect: {
			'ja-jp': "相手のベンチポケモンの数×20ダメージ追加。",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Pokémon Cadangan lawan.",
			'th-th': "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ฝ่ายตรงข้าม x20",
			'zh-tw': "增加對手的備戰寶可夢的數量×20點傷害。",
			'zh-cn': "增加對手的備戰寶可夢的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803166,
				tcgplayer: 602408,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604539,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602409,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card