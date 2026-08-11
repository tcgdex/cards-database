import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ケンタロス",
	},

	illustrator: "Tsuyoshi Nagano",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "ツノを つきあわせて 戦う。 群れを守る 強い ケンタロスは キズだらけの ツノを 自慢する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むれでねらう" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモンを1匹選び、自分の場の、名前に「ケンタロス」とつくポケモンの数ぶんコインを投げる。選んだポケモンに、オモテの数×50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877323,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [128],
};

export default card;
