import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ラランテス",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "むしポケモンの ふりを するのは 身を 守るため。 両腕の 花びらは 鋭い 切れ味。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はなふぶき" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ソルスラッシュ" },
			damage: "50+",
			cost: ["Grass"],
			effect: {
				ja: "このポケモンに[炎]エネルギーがついているなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557196,
			},
		},
	],

	evolveFrom: {
		ja: "カリキリ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [754],
};

export default card;
