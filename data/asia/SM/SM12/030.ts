import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ココロモリ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "コンクリートも 壊せるほどの 強い 超音波を 出すとき 尻尾が 激しく 震える。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ちょうおんぱ" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "チャームスタンプ" },
			cost: ["Psychic"],
			effect: {
				ja: "相手は相手自身のポケモンを1匹選ぶ。そのポケモンに、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554838,
			},
		},
	],

	evolveFrom: {
		ja: "コロモリ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [528],
};

export default card;
