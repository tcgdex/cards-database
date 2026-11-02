import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "キングドラ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "普段は 海底洞窟に 身を 潜めているらしい。 あくびで 渦潮を 発生させる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "しおみず" },
			cost: ["Water"],
			effect: {
				ja: "ダメカンがのっている相手のポケモン1匹に、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "トルネードショット" },
			damage: 90,
			cost: ["Water"],
			effect: {
				ja: "このポケモンについている[水]エネルギーを1個トラッシュし、相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561082,
			},
		},
	],

	evolveFrom: {
		ja: "シードラ",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [230],
};

export default card;
