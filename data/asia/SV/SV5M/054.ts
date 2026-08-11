import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベロベルト",
		'zh-tw': "大舌舔",
		'th-th': "เบโรเบลท์",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'ja-jp': "体の 何倍もの 長さまで 伸びる 不思議な ベロを もつ。 その 不思議は 未解明のまま。",
		'zh-tw': "神奇的舌頭能夠伸到身高的好幾倍遠。至今沒人能解開 為什麼它會這麼神奇。",
		'th-th': "ลิ้นที่ดูแปลกนั้นสามารถยืดยาวได้มากกว่าส่วนสูงของร่างกายหลายเท่า ยังไม่มีใครรู้ว่าทำไมถึงเป็นเช่นนั้น",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "のしかかり",
				'zh-tw': "泰山壓頂",
				'th-th': "ทิ้งตัวทับ",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
				'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			},
		},
		{
			name: {
				'ja-jp': "ベロベロハリケーン",
				'zh-tw': "舔舔颶風",
				'th-th': "เฮอริเคนแพล็บแพล็บ",
			},
			damage: "70×",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを4回投げ、オモテの数×70ダメージ。",
				'zh-tw': "擲4次硬幣，造成正面出現的次數×70點傷害。",
				'th-th': "ทอยเหรียญ 4 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x70",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752938,
				tcgplayer: 566205,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ベロリンガ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Common",
	dexId: [463],
};

export default card;
