import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ワカシャモ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "戦いに なると 体内の 炎が 激しく 燃え上がる。 キックは 破壊力 抜群だ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しぜんかいふく" },
			effect: {
				ja: "手札からこのポケモンにエネルギーをつけるたび、このポケモンの特殊状態をすべて回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "とびかかる" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559162,
			},
		},
	],

	evolveFrom: {
		ja: "アチャモ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [256],
};

export default card;
