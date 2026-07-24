import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "サワムラー",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "脚が 自由に 伸び縮みして 遠く 離れている 場合でも 相手を 蹴り上げることができる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スペシャルコンボ" },
			cost: ["Fighting"],
			effect: {
				ja: "このワザは、前の自分の番に「エビワラー」が「ヒット&アウェー」を使っていなければ使えない。相手のベンチポケモン1匹に、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "メガトンキック" },
			damage: 90,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558380,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [106],
};

export default card;
