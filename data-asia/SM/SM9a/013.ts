import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲコガシラ",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "泡で 包んだ 小石を 投げる 技を 使う。 ３０メートル 先の 空き缶に 当てる コントロール。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ざんぞうぎり" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558200,
			},
		},
	],

	evolveFrom: {
		ja: "ケロマツ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [657],
};

export default card;
