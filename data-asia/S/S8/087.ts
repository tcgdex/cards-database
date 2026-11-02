import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ココガラ",
		'zh-tw': "稚山雀",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "小さい 体で 機敏に 飛んで 隙を 突く 戦法で 体の 大きな 相手を 手玉に取る。",
		'zh-tw': "嬌小的體型讓牠能敏捷地飛翔。攻其不備的戰法將體型巨大的對手玩弄於股掌之間。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みだれづき",
				'zh-tw': "亂擊",
			},
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数×10ダメージ。",
				'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575642,
				tcgplayer: 569588,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [821],
};

export default card;
