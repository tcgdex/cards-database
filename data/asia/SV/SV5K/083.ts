import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チラチーノ",
		'zh-tw': "奇諾栗鼠",
		'th-th': "จิลาจีโน",
		'ko-kr': "치라치노",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'ja-jp': "塵ひとつ 許せない 潔癖。 体から 染み出る 油を 巣に 塗りつけ コーティングする。",
		'zh-tw': "潔癖使得牠連一絲灰塵都無法容忍，會把自己身上 滲出的油塗在巢上保持清潔。",
		'th-th': "เกลียดความสกปรกไม่ยอมให้มีฝุ่นแม้แต่นิดเดียว ทารังเพื่อเคลือบไว้ด้วยน้ำมันที่ซึมมาจากร่างกาย",
		'ko-kr': "먼지 한 톨도 용납하지 않는 결벽증. 몸에서 나오는 기름을 둥지에 발라서 코팅한다.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ひっぱたく",
				'zh-tw': "重摑",
				'th-th': "ตบแรง",
				'ko-kr': "세게때리기",
			},
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "スペシャルころころ",
				'zh-tw': "特殊滾滾",
				'th-th': "กลมกลิ้งพิเศษ",
				'ko-kr': "스페셜통통",
			},
			damage: "70×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている特殊エネルギーの枚数×70ダメージ。",
				'zh-tw': "造成這隻寶可夢身上附加的特殊能量卡的張數×70點傷害。",
				'th-th': "แดเมจจะเท่ากับจำนวนการ์ดพลังงานพิเศษที่ติดอยู่กับโปเกมอนนี้ x70",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752864,
				tcgplayer: 568417,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "チラーミィ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [573],
};

export default card;
