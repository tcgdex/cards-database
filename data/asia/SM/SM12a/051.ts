import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゼラオラGX",
	},

	illustrator: "PLANETA Otani",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じんらいゾーン" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、[雷]エネルギーがついている自分のポケモン全員のにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "プラズマフィスト" },
			damage: 160,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
		{
			name: { ja: "フルボルテージGX" },
			cost: ["Lightning"],
			effect: {
				'ja-jp': "自分のトラッシュにある基本エネルギーを5枚、自分のポケモンに好きなようにつける。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 543741,
			},
		},
	],

	retreat: 2,
	regulationMark: "B",
	rarity: "Double rare",
	dexId: [807],

	suffix: "GX",
};

export default card;
