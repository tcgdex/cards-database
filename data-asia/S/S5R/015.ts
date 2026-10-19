import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [850],
	rarity: "Common",
	set: Set,

	name: {
		ja: "ヤクデ",
		'zh-tw': "燒火蚣",
		th: "ยาคุเดะ"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "発熱した 体で 獲物を 締め上げる。 こんがり 焼けたら むしゃむしゃ いただくのだ。",
		'zh-tw': "會用滾燙的身體勒緊獵物，等到烤得恰到好處之時，就把牠們大口大口地吃掉。",
		th: "ห่อตัวเหยื่อด้วยร่างที่ปล่อยความร้อนออกมา พอไหม้เกรียมกำลังดีก็สวาปามเลย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "やきこがす",
			'zh-tw': "灼燒",
			th: "เพลิงประลัยกัลป์"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [ไหม้]"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533647, tcgplayer: 569056, cardtrader: 240020 } }
	]
}

export default card