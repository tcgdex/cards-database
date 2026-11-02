import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のコラッタ",
		'zh-tw': "<火箭隊的>小拉達",
		'zh-cn': "<火箭隊的>小拉達",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "ありふれた ポケモンだが 注意。 鋭い 前歯は 堅い 材木さえ 簡単に へしおる。",
		'zh-tw': "雖然是常見的寶可夢，但還是要小心。 銳利的門牙十分堅硬， 就連木材也能輕易咬斷。",
		'zh-cn': "雖然是常見的寶可夢，但還是要小心。 銳利的門牙十分堅硬， 就連木材也能輕易咬斷。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "あぶないまえば",
				'zh-tw': "險惡門牙",
				'zh-cn': "險惡門牙",
			},
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
				'zh-cn': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821908,
				tcgplayer: 628717,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [19],
};

export default card;
