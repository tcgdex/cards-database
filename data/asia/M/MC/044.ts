import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エルフーンex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "エナジーギフト" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "自分の山札から基本エネルギーを3枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ワンダーコットン" },
			damage: "50×",
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手の手札を見て、その中にあるトレーナーズの枚数×50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863335,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "モンメン",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "None",
	dexId: [547],

	suffix: "EX",
};

export default card;
