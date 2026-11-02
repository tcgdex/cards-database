import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "アノクサ",
		'zh-tw': "納噬草",
		th: "อาโนะคุสะ",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "風に吹かれて 荒野を 転がり 行き先は 自分でも わからない。 体が 濡れるのが 大嫌い。",
		'zh-tw': "在風的吹拂下滾動於荒野間，就連自己也不知道會滾到哪裡去。 最討厭身體被弄得濕答答的。",
		th: "ถูกลมพัดกลิ้งไปตามทุ่งหญ้ารกร้าง แม้แต่ตัวเองก็ไม่รู้ว่ากำลังมุ่งหน้าไปที่ไหน เกลียดการที่ร่างกายเปียกชุ่มเป็นอย่างมาก",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "トゲでさす",
				'zh-tw': "針刺",
				th: "แทงด้วยหนาม",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752893,
				tcgplayer: 566163,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [946],
};

export default card;
