import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ジグザグマ",
		'zh-tw': "炎兔兒",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "この姿が いちばん 古い ジグザグマの 姿 らしい。 ジグザグ動いて あたりを 荒らす。",
		'zh-tw': "不斷奔跑使體溫升高後，火之能量會在牠體內循環，促使牠發揮出真正的力量。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かんしゃくヘッド" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のポケモン1匹に、ダメカンを1個のせる。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ふいをつく",
				'zh-tw': "搶先一步",
			},
			damage: 30,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "從自己的牌庫抽出1張卡。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525355,
				tcgplayer: 597334,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [263],
};

export default card;
