import { Card } from "models/database/card";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エムリット",
		'zh-tw': "艾姆利多",
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "湖の 底で 眠っているが 魂が 抜け出して 水面を 飛び回ると 言われている。",
		'zh-tw': "在湖底沉睡。 但據說牠的靈魂會跑出來， 在水面徘徊飛行。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "いしきのとばり",
				'zh-tw': "意識之帳",
			},
			effect: {
				'ja-jp': "自分の場に「ユクシー」「アグノム」がいるなら、自分のポケモン全員の弱点は、すべてなくなる。",
				'zh-tw': "若自己的場上有「由克希」「亞克諾姆」，則自己的所有寶可夢的弱點全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "しねんのずつき",
				'zh-tw': "意念頭錘",
			},
			damage: 30,
			cost: ["Psychic", "Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651089,
				tcgplayer: 569873,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [481],
};

export default card;
