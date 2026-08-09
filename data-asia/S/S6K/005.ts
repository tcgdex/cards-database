import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "タネボー",
		'zh-tw': "橡實果",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "頭の 先を 枝に くっつけて ぶら下がる。 強風に あおられ 落ちてしまう ことも あるのだ。",
		'zh-tw': "會將頭頂黏在樹枝上懸掛著。也有被大風吹落的時候。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "おどろかす",
				'zh-tw': "驚嚇",
			},
			damage: 10,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。",
				'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，在看過那張卡正面後放回對手的牌庫並重洗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560719,
				tcgplayer: 569233,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [273],
};

export default card;
