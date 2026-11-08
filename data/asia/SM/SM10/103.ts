import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エルフーンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Fairy"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふわふわコットン" },
			effect: {
				'ja-jp': "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エナジーブロー" },
			damage: "10+",
			cost: ["Fairy"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーの数x30ダメージ追加。",
			},
		},
		{
			name: { ja: "トイボックスGX" },
			cost: ["Fairy"],
			effect: {
				'ja-jp': "自分の山札にある好きなカードを5枚まで、手札に加える。そして山札を切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557461,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "モンメン",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [547],

	suffix: "GX",
};

export default card;
