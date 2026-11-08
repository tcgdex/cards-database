import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アリゲイツ",
		'zh-tw': "藍鱷",
		'th-th': "อัลลิเกต",
		'ko-kr': "엘리게이",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "キバは 抜けても 次から 次に 生えてくる。いつも 口の中には ４８本の キバが そろっている。",
		'zh-tw': "即使牙齒掉了也會不斷重新長出來。 嘴裡總是長滿著４８顆牙齒。",
		'th-th': "แม้เขี้ยวจะหลุดไป ก็จะงอกขึ้นมาใหม่เรื่อย ๆ ในปากจึงมีเขี้ยวครบ 48 ซี่เสมอ",
		'ko-kr': "이빨이 빠져도 계속해서 자란다. 항상 입안에는 48개의 이빨이 나 있다.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ぎゃくふんしゃ",
				'zh-tw': "逆向噴射",
				'th-th': "พ่นน้ำสวนทาง",
				'ko-kr': "역분사",
			},
			damage: 30,
			cost: ["Water"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
				'th-th': "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
				'ko-kr': "이 포켓몬을 벤치 포켓몬과 교체한다.",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752768,
				tcgplayer: 568348,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ワニノコ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [159],
};

export default card;
