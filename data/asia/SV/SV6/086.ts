import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エイパム",
		'zh-tw': "長尾怪手",
		'th-th': "เอย์แพม",
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "手よりも 自由自在に 動く 尻尾を 巧みに 操りながら 高い 木の上で 暮らしている。",
		'zh-tw': "會巧妙地操縱比雙手 還靈活的尾巴， 生活在高高的樹上。",
		'th-th': "อาศัยอยู่บนต้นไม้สูง ใช้หางที่ขยับได้ดั่งใจได้อย่างช่ำชองยิ่งกว่ามือของมัน",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ぶらさがる",
				'zh-tw': "垂吊",
				'th-th': "ห้อยโตงเตง",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "やんちゃげり",
				'zh-tw': "調皮踢",
				'th-th': "เตะแกล้ง",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767179,
				tcgplayer: 568076,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [190],
};

export default card;
