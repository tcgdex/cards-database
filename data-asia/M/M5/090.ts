import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ザルード",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うしろなげ" },
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "自分のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "シャドーウィップ" },
			damage: "100+",
			cost: ["Darkness", "Darkness", "Darkness"],
			effect: {
				ja: "自分のベンチポケモンに「シャドー[D]エネルギー」がついているなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888635,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [893],
};

export default card;
