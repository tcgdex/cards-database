import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲッコウガex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "おんみつぎり" },
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン1匹に、そのポケモンにのっているダメカンの数×30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "アクアエッジ" },
			damage: 160,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908193,
			},
		},
	],

	evolveFrom: {
		ja: "ゲコガシラ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Double rare",
	dexId: [658],

	suffix: "EX",
};

export default card;
