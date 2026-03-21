import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ネンドール",
		'zh-tw': "念力土偶",
		th: "เนนดอลล์"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [344],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "古代人の 泥人形から 生まれたらしい。 念力を 使い 空中に 浮いて 移動する。",
		'zh-tw': "似乎是從古代人做的泥偶誕生而來的寶可夢。能靠念力飄浮在空中移動。",
		th: "ดูเหมือนว่าเกิดมาจากตุ๊กตาดินเหนียวของมนุษย์โบราณ ใช้พลังจิตลอยตัวและเคลื่อนที่ไปในอากาศ"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ドッカンドール",
			'zh-tw': "轟爆土偶",
			th: "ตุ๊กตาระเบิดตูม"
		},

		effect: {
			ja: "相手のバトルポケモンの残りHPが「10」になるように、ダメカンをのせる。その後、このポケモンに120ダメージ。",
			'zh-tw': "在對手的戰鬥寶可夢身上放置傷害指示物直到剩餘HP變為「10」為止。然後，這隻寶可夢受到120點傷害。",
			th: "วางตัวนับแดเมจให้ HP ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเหลือเท่ากับ [10] หลังจากนั้น ทำแดเมจ 120 กับโปเกมอนนี้"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "サイコトリップ",
			'zh-tw': "精神歪曲",
			th: "ไซโคทริป"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 723991
	}
}

export default card