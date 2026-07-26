import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ロトム",
		'zh-tw': "精靈球",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ジャンクハント" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュからグッズを1枚選び、相手に見せて、手札に加える。",
			},
		},
		{
			name: { ja: "でんきショック" },
			damage: 20,
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587770,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [479],
};

export default card;
