import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クヌギダマ",
		'zh-tw': "榛果球",
		'th-th': "คุนุกิดามะ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "口から 吐き出す 液体は 木の皮を つける 接着剤。 空気に 触れると 固まるのだ。",
		'zh-tw': "口中吐出的液體是牠用來貼上樹皮的膠水， 一接觸到空氣就會凝固。",
		'th-th': "ของเหลวที่พ่นออกมาจากปากคือกาวที่เอาไว้ติดเปลือกไม้ พอโดนอากาศก็จะแข็งตัว",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ぶつかる",
				'zh-tw': "衝撞",
				'th-th': "กระแทก",
			},
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752883,
				tcgplayer: 566153,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [204],
};

export default card;
