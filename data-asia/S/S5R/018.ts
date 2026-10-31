import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "タッツー" },
	dexId: [117],
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "シードラ",
		'zh-tw': "海刺龍",
		th: "ซีดรา"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "羽と 尻尾を 素早く 動かし 前を 向いたまま 後ろへ 泳ぐこともできる ポケモン。",
		'zh-tw': "這種寶可夢可以藉著快速擺動翅膀和尾巴，在面向前方的情況下向後游動。",
		th: "โปเกมอนที่ขยับปีกและหางได้อย่างรวดเร็วและก็สามารถว่ายน้ำถอยหลังได้ขณะที่หันมองไปข้างหน้า"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "みずでっぽう",
			'zh-tw': "水槍",
			th: "ปืนฉีดน้ำ"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533662, tcgplayer: 569059, cardtrader: 240023 } }
	]
}

export default card