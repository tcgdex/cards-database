import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビビヨン",
		'zh-tw': "彩粉蝶",
		'th-th': "วิวิญอง",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "住んでいる 気候や 風土によって 羽の 模様が 違う ポケモン。 色鮮やかな りんぷんを まく。",
		'zh-tw': "翅膀花紋依棲息地的氣候和水土而有所不同的寶可夢。會散佈色彩鮮艷的鱗粉。",
		'th-th': "เป็นโปเกมอนที่มีลายบนปีกต่างกันไปตามสภาพภูมิประเทศและสภาพอากาศที่อยู่ จะโปรยผงละอองสีสดใสออกมา",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "バイタルパウダー",
				'zh-tw': "生機粉",
				'th-th': "ไวทัลพาวเดอร์",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分のベンチポケモンを2匹選び、HPをすべて回復する。",
				'zh-tw': "選擇2隻自己的備戰寶可夢，將HP全部恢復。",
				'th-th': "เลือกโปเกมอนบนเบนช์ฝ่ายเรา 2 ตัวและฟื้นฟู HP ทั้งหมด",
			},
		},
		{
			name: {
				'ja-jp': "かぜおこし",
				'zh-tw': "起風",
				'th-th': "เรียกลม",
			},
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533252,
				tcgplayer: 568954,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コフーライ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [666],
};

export default card;
