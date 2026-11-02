import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "デンリュウ",
		'zh-tw': "電龍",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		ja: "シッポは 強く 明るく 輝く。 船乗りたちの 道しるべ として 昔から 大切に されてきた。",
		'zh-tw': "尾巴發出的耀眼光芒被船員們當成引路的路標，從過去就一直深受重視。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "でんきショック",
				'zh-tw': "電擊",
			},
			damage: 50,
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
		{
			name: {
				ja: "サーチライトテール",
				'zh-tw': "探照燈尾",
			},
			damage: "90+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にエネルギーがあるなら、90ダメージ追加。",
				'zh-tw': "查看對手的手牌，若其中有能量卡，則增加90點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560769,
				tcgplayer: 569248,
			},
		},
	],

	evolveFrom: {
		ja: "モココ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [181],
};

export default card;
