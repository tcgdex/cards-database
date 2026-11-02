import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "チラチーノ",
		'zh-tw': "奇諾栗鼠",
		th: "จิลาจีโน",
		ko: "치라치노",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "塵ひとつ 許せない 潔癖。 体から 染み出る 油を 巣に 塗りつけ コーティングする。",
		'zh-tw': "潔癖使得牠連一絲灰塵都無法容忍，會把自己身上 滲出的油塗在巢上保持清潔。",
		th: "เกลียดความสกปรกไม่ยอมให้มีฝุ่นแม้แต่นิดเดียว ทารังเพื่อเคลือบไว้ด้วยน้ำมันที่ซึมมาจากร่างกาย",
		ko: "먼지 한 톨도 용납하지 않는 결벽증. 몸에서 나오는 기름을 둥지에 발라서 코팅한다.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ひっぱたく",
				'zh-tw': "重摑",
				th: "ตบแรง",
				ko: "세게때리기",
			},
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "スペシャルころころ",
				'zh-tw': "特殊滾滾",
				th: "กลมกลิ้งพิเศษ",
				ko: "스페셜통통",
			},
			damage: "70×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている特殊エネルギーの枚数×70ダメージ。",
				'zh-tw': "造成這隻寶可夢身上附加的特殊能量卡的張數×70點傷害。",
				th: "แดเมจจะเท่ากับจำนวนการ์ดพลังงานพิเศษที่ติดอยู่กับโปเกมอนนี้ x70",
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
		ja: "チラーミィ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [573],
};

export default card;
