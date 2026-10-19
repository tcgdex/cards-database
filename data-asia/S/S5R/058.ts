import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "ニャルマー" },
	dexId: [432],
	rarity: "Common",
	set: Set,

	name: {
		ja: "ブニャット",
		'zh-tw': "東施喵",
		th: "บูเนียตโตะ"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "体を 大きく 見せて 相手を 威圧するため ふたまたの 尻尾で ウエストを ぎゅっと 絞っている。",
		'zh-tw': "為了讓自己的身體看起來大一點來威嚇對手，會把分叉的尾巴緊緊纏在腰上。",
		th: "จะใช้หางสองแฉกรัดเอวทำให้ตัวดูใหญ่ขึ้นเพื่อข่มขู่ศัตรู"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ねこびより",
			'zh-tw': "貓日和",
			th: "แมวเริงร่าฟ้าใส"
		},

		effect: {
			ja: "自分の山札を3枚引く。その後、このポケモンをねむりにする。",
			'zh-tw': "從自己的牌庫抽出3張卡。然後，將這隻寶可夢【睡眠】。",
			th: "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา หลังจากนั้น ทำให้โปเกมอนนี้อยู่ในสภาวะ [หลับ]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ツメできりさく",
			'zh-tw': "利爪劈擊",
			th: "กรงเล็บฉีกร่าง"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533862, tcgplayer: 569099, cardtrader: 240069 } }
	]
}

export default card