import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤクデ",
		'zh-tw': "燒火蚣",
		'zh-cn': "燒火蚣",
	},

	illustrator: "Minahamu",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "体に 溜めた 可燃ガスで 発熱。 とくに お腹の 黄色い 部分が 熱いのだ。",
		'zh-tw': "靠儲存在體內的可燃氣體 來發熱。熱度最高的是 腹部的黃色部分。",
		'zh-cn': "靠儲存在體內的可燃氣體 來發熱。熱度最高的是 腹部的黃色部分。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひだね",
				'zh-tw': "火種",
				'zh-cn': "火種",
			},
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: {
				ja: "ひっかける",
				'zh-tw': "鉤住",
				'zh-cn': "鉤住",
			},
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793449,
				tcgplayer: 587595,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [850],
};

export default card;
