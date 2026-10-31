import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [341],
	rarity: "Common",
	set: Set,

	name: {
		ja: "ヘイガニ",
		'zh-tw': "龍蝦小兵",
		th: "เฮกานิ"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "外国から やってきた ポケモンが 野生化した。 どんなに 汚い 川でも 適応してしまう。",
		'zh-tw': "來自外國的寶可夢，現在已經回歸了野生環境。不管多麼污濁的河水都能適應。",
		th: "เป็นโปเกมอนที่มาจากต่างดินแดนทำตัวให้เข้ากับป่า ไม่ว่าแม่น้ำจะสกปรกแค่ไหนก็ปรับตัวเข้าได้หมด"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "バブルこうせん",
			'zh-tw': "泡沫光線",
			th: "บับเบิ้ลบีม"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ【ชา】"
		},

		damage: 30,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533692, tcgplayer: 569065, cardtrader: 240029 } }
	]
}

export default card