import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナエトル",
		'zh-tw': "草苗龜",
		'th-th': "นาเอเติล",
		'ko-kr': "모부기",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "太陽の 光を 浴びて 全身で 光合成を する。 甲羅は 土が 硬くなったもの。",
		'zh-tw': "沐浴著陽光，用全身進行光合作用。 甲殼是泥土變硬後形成的。",
		'th-th': "ทำการสังเคราะห์ด้วยแสงทั่วร่างกายเมื่อได้อาบแสงอาทิตย์ กระดองคือดินที่จับตัวเป็นก้อนแข็ง",
		'ko-kr': "태양의 빛을 쬐어 전신으로 광합성을 한다. 등껍질은 흙이 딱딱해진 것이다.",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "かたいこうら",
				'zh-tw': "堅硬甲殼",
				'th-th': "กระดองสุดแข็ง",
				'ko-kr': "단단한 껍질",
			},
			effect: {
				'ja-jp': "このポケモンが受けるワザのダメージは「-20」される。",
				'zh-tw': "這隻寶可夢受到招式的傷害「-20」點。",
				'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-20]",
				'ko-kr': "이 포켓몬이 받는 기술의 데미지는 「-20」이 된다.",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "このは",
				'zh-tw': "樹葉",
				'th-th': "ใบไม้",
				'ko-kr': "나뭇잎",
			},
			damage: 30,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752745,
				tcgplayer: 568337,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [387],
};

export default card;
