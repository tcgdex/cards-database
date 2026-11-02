import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のリーシャン",
		'zh-tw': "<火箭隊的>鈴鐺響",
		'zh-cn': "<火箭隊的>鈴鐺響",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "飛び跳ねると 口の中にある 玉が あちこちに 反射して 鈴のような 音色と なる。",
		'zh-tw': "如果跳起來， 嘴裡的珠子就會到處反彈， 發出鈴鐺一般的音色。",
		'zh-cn': "如果跳起來， 嘴裡的珠子就會到處反彈， 發出鈴鐺一般的音色。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リンリンさわぐ" },
			cost: [],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821873,
				tcgplayer: 628682,
			},
		},
	],

	retreat: 0,
	regulationMark: "I",
	rarity: "Common",
	dexId: [433],
};

export default card;
