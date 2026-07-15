import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤクデ",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "体に 溜めた 可燃ガスで 発熱。 とくに お腹の 黄色い 部分が 熱いのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "のやき" },
			cost: ["Fire"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
			},
		},
		{
			name: { ja: "バグパニック" },
			damage: "50×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を下から7枚オモテにして、その中にある、ワザ「バグパニック」を持つポケモンの枚数×50ダメージ。オモテにしたポケモンは山札にもどして切る。残りのカードはトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888245,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [850],
};

export default card;
