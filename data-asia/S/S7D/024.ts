import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ルガルガンV",
		'zh-tw': "鬃岩狼人V",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "いわおとし",
				'zh-tw': "落石",
			},
			damage: 40,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "クラッシュファング",
				'zh-tw': "粉碎獠牙",
			},
			damage: 200,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571606,
				tcgplayer: 569347,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [745],
};

export default card;
