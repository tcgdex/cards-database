import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [779],
	rarity: "Common",
	set: Set,

	name: {
		ja: "ハギギシリ",
		'zh-tw': "磨牙彩皮魚",
		th: "ฮากิกิชิริ"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "ヒドイデの ハリも 通さないほど 分厚い 皮膚。 丈夫な 歯で ボリボリと ハリを かじって 食う。",
		'zh-tw': "厚實的皮膚連好壞星的針也無法穿透。會用結實的牙齒把針咬碎之後吃下去。",
		th: "มีหนังหนาขนาดที่หนามของฮิโดอิเดะก็แทงไม่เข้า จะกัดหนามกินด้วยฟันที่แข็งแรง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "かみつく",
			'zh-tw': "咬住",
			th: "กัดติด"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "なみのり",
			'zh-tw': "衝浪",
			th: "โต้คลื่น"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533717, tcgplayer: 569070, cardtrader: 240034 } }
	]
}

export default card