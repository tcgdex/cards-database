import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "モグリュー",
		'zh-tw': "螺釘地鼠",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "ツメで 地中を 掘り進むので 育てた 野菜が 傷むと 農業関係者は 嫌う。",
		'zh-tw': "會用爪子在地底挖掘前進。一些農民因為擔心牠會因此糟蹋蔬菜而討厭牠。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっかく",
				'zh-tw': "抓",
			},
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575612,
				tcgplayer: 569558,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [529],
};

export default card;
