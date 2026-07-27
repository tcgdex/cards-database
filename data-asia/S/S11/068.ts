import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "メグロコ",
		'zh-tw': "黑眼鱷",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "砂漠の 夜は 冷えるので 砂の 奥深くに 潜り 陽が 出るまで 眠って 過ごす。",
		'zh-tw': "沙漠的夜晚比較寒冷，因此牠會潛到沙子深處， 一直睡到太陽出來。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かみつく",
				'zh-tw': "咬住",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667943,
				tcgplayer: 569999,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [551],
};

export default card;
