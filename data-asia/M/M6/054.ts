import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ルリリ",
	},

	illustrator: "TOMATO MARKET",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],

	description: {
		ja: "まるくて 大きな 尻尾には 成長に 必要な 栄養が たっぷりと 詰まっているのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぴょんぴょんチャージ" },
			cost: [],
			effect: {
				ja: "自分の山札からエネルギーを1枚選び、ベンチポケモンにつける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899957,
				tcgplayer: 709207,
			},
		},
	],

	retreat: 0,
	regulationMark: "J",
	rarity: "Common",
	dexId: [298],
};

export default card;
