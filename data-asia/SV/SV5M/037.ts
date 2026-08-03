import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "アサナン",
		'zh-tw': "瑪沙那",
		th: "อาซานัน",
	},

	illustrator: "Natsumi Miyanose",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "瞑想で 精神エネルギーを 高めて 空中に 浮かぶ。 １日に １個 木の実を 食べる。",
		'zh-tw': "用冥想提高精神能量後，就可以浮在空中。 １天會吃下１個樹果。",
		th: "นั่งสมาธิเพื่อขัดเกลาพลังจิตให้เพิ่มขึ้นและลอยขึ้นกลางอากาศ จะกินผลไม้แค่ 1 ผลต่อวัน",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ビンタ",
				'zh-tw': "巴掌",
				th: "ตบ",
			},
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "キック",
				'zh-tw': "踢",
				th: "เตะ",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752919,
				tcgplayer: 566188,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [307],
};

export default card;
