import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハヤシガメ",
		'zh-tw': "樹林龜",
		'th-th': "ฮายาชิกาเมะ",
		'ko-kr': "수풀부기",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "森の 中の 水辺で 暮らす。 昼間は 森の 外に 出て 甲羅の 木に 光を 当てる。",
		'zh-tw': "生活在森林中的水邊。白天會去森林的外面， 讓甲殼上的樹木曬曬太陽。",
		'th-th': "อาศัยอยู่แถบริมน้ำกลางป่า ตอนกลางวันจะออกไปนอกป่าเพื่อให้ต้นไม้บนกระดองได้รับแสงแดด",
		'ko-kr': "숲속의 물가에서 산다. 낮에는 숲 밖으로 나와서 등껍질의 나무에 빛을 쬔다.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "いあいぎり",
				'zh-tw': "居合斬",
				'th-th': "ตัด",
				'ko-kr': "풀베기",
			},
			damage: 20,
			cost: ["Grass"],
		},
		{
			name: {
				'ja-jp': "こうらでぶつかる",
				'zh-tw': "甲殼衝撞",
				'th-th': "กระดองประจัญบาน",
				'ko-kr': "껍질로 부딪치기",
			},
			damage: 50,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-20」點。",
				'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-20]",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752746,
				tcgplayer: 568338,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ナエトル",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Common",
	dexId: [388],
};

export default card;
