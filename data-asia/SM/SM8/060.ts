import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "フォレトス",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "木に くっついたまま 動かない。 硬い殻の 破片を ばらまいて 近づくものを 追い払う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トゲトゲふんしゃ" },
			cost: ["Metal"],
			effect: {
				ja: "コインを3回投げ、オモテの数x10ダメージを、相手のポケモン全員にそれぞれ与える。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ロストボンバー" },
			damage: 190,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、ロストゾーンに置く。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558699,
			},
		},
	],

	evolveFrom: {
		ja: "クヌギダマ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [205],
};

export default card;
