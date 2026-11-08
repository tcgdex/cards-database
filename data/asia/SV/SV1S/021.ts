import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヘイラッシャ",
		'zh-tw': "吃吼霸",
		'th-th': "เฮรัชเชอร์",
		'id-id': "Dondozo"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [977],
	hp: 160,
	types: ["Water"],

	description: {
		'ja-jp': "大食らいだが エサを 取るのは 苦手。 シャリタツと コンビを 組んで 獲物を 捕らえるのだ。",
		'zh-tw': "雖然是個大胃王，但不擅長捕食。 會和米立龍聯手捕捉獵物。",
		'th-th': "เป็นโปเกมอนที่ตะกละแต่กลับหาอาหารไม่เก่ง มักจับคู่กับชาริทัตสึเพื่อจับเหยื่อ",
		'id-id': "Meskipun rakus, Dondozo tidak pandai menangkap makanannya. Pokémon ini membentuk tim dengan Tatsugiri untuk berburu dan menangkap mangsa."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "いかりちらす",
			'zh-tw': "洩怒",
			'th-th': "กระจายความโกรธ",
			'id-id': "Kemarahan Menghambur"
		},

		damage: "50×",

		effect: {
			'ja-jp': "自分のトラッシュにある「シャリタツ」の枚数×50ダメージ。",
			'zh-tw': "造成自己的棄牌區的「米立龍」的張數×50點傷害。",
			'th-th': "แดเมจจะเท่ากับจำนวนการ์ด [ชาริทัตสึ] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา x50",
			'id-id': "Serangan ini memberikan kerusakan sejumlah 50 untuk tiap lembar Tatsugiri yang ada di Trash sendiri."
		}
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ヘビースプラッシュ",
			'zh-tw': "重磅飛濺",
			'th-th': "เฮฟวีสแปลช",
			'id-id': "Heavy Splash"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 692987,
				tcgplayer: 567138,
			},
		},
	],

	retreat: 4,
	regulationMark: "G"
}

export default card