import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "キュウコン",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "しつこく 執念深い 性質。 １度 恨むと 子孫を 含め １０００年間 祟り続ける。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きゅうびのいざない" },
			effect: {
				ja: "自分の番に1回使える。自分の手札にある[炎]エネルギーを、2枚トラッシュする。その後、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ほのおのしっぽ" },
			damage: 90,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543481,
			},
		},
	],

	evolveFrom: {
		ja: "ロコン",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [38],
};

export default card;
