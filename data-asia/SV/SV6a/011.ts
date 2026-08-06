import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "シードラ",
		'zh-tw': "海刺龍",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "オスが 子どもを 育てる。 子育て中は 背中の トゲの 毒素が 強く 濃くなるのだ。",
		'zh-tw': "是由雄性來養育孩子。 在育兒時，背上刺的 毒素會變得更強更濃。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "えんぐん",
				'zh-tw': "援軍",
			},
			cost: ["Water"],
			effect: {
				ja: "自分の山札からポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多3張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "するどいひれ",
				'zh-tw': "銳利鰭",
			},
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773760,
				tcgplayer: 566262,
			},
		},
	],

	evolveFrom: {
		ja: "タッツー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [117],
};

export default card;
