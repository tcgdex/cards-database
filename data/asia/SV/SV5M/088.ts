import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リキキリンex",
		'zh-tw': "奇麒麟ex",
		'th-th': "ริกิคิรินex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Darkness"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "テイルアーマー",
				'zh-tw': "尾甲",
				'th-th': "เกราะหาง",
			},
			effect: {
				'ja-jp': "このポケモンは、相手のたねポケモンの「ポケモンex」からワザのダメージを受けない。",
				'zh-tw': "這隻寶可夢不會受到對手的【基礎】寶可夢的「寶可夢【ex】」招式的傷害。",
				'th-th': "โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้จาก [โปเกมอน【ex】] ที่เป็นโปเกมอน[พื้นฐาน]ฝ่ายตรงข้าม",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ダーティビーム",
				'zh-tw': "惡劣光束",
				'th-th': "เดอร์ตี้บีม",
			},
			damage: 160,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
				'th-th': "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752972,
				tcgplayer: 566239,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "キリンリキ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [981],

	suffix: "EX",
};

export default card;
