import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤクデ",
		'zh-tw': "燒火蚣",
		'th-th': "ยาคุเดะ",
		'ko-kr': "태우지네",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "体に 溜めた 可燃ガスで 発熱。 とくに お腹の 黄色い 部分が 熱いのだ。",
		'zh-tw': "靠儲存在體內的可燃氣體來發熱。熱度最高的是 腹部的黃色部分。",
		'th-th': "ปล่อยความร้อนจากแก๊สเผาไหม้ที่กักไว้ในร่าง โดยเฉพาะส่วนสีเหลืองตรงท้องนั้นร้อนมาก",
		'ko-kr': "몸속에 모아둔 가연성 가스로 열을 낸다. 특히 배 쪽의 노란 부분이 뜨겁다.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ヒートダイブ",
				'zh-tw': "高溫奇襲",
				'th-th': "ฮีทไดฟ์",
				'ko-kr': "히트다이브",
			},
			damage: 30,
			cost: ["Fire"],
			effect: {
				'ja-jp': "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
				'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
				'ko-kr': "이 포켓몬에게도 10데미지를 준다.",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752752,
				tcgplayer: 568344,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [850],
};

export default card;
