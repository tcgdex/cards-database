import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "カマスジョー",
		'zh-tw': "戽斗尖梭",
		'zh-cn': "戽斗尖梭",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "尾びれを 回転させ 勢いよく 跳びあがり 水面 近くを 飛ぶ キャモメに 激しく 食らいつく。",
		'zh-tw': "會旋轉尾鰭猛然跳起， 然後以強勁的力道咬住 飛在水面附近的長翅鷗。",
		'zh-cn': "會旋轉尾鰭猛然跳起， 然後以強勁的力道咬住 飛在水面附近的長翅鷗。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "するどいひれ",
				'zh-tw': "銳利鰭",
				'zh-cn': "銳利鰭",
			},
			damage: 40,
			cost: ["Water"],
		},
		{
			name: {
				ja: "ダイビング",
				'zh-tw': "潛水",
				'zh-cn': "潛水",
			},
			damage: 60,
			cost: ["Water", "Water"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
				'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
				'zh-cn': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821862,
				tcgplayer: 628671,
			},
		},
	],

	evolveFrom: {
		ja: "サシカマス",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [847],
};

export default card;
