import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ルリリ",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],

	description: {
		ja: "まるくて 大きな 尻尾には 成長に 必要な 栄養が たっぷりと 詰まっているのだ。"
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

	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900112,
				tcgplayer: 709239,
				cardtrader: 403169,
			},
		},
	],

	retreat: 0,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [298],
};

export default card;
