import { Card } from "models/database/card";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アブソル",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'ja-jp': "不吉なのは 見た目だけ。 田畑を 守ってくれたり 異変を 人に 告げてくれる ありがたい 存在。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふきつなしらせ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手の場のポケモンについている特殊エネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "ダーティスロー" },
			damage: 70,
			cost: ["Darkness", "Colorless"],
			effect: {
				'ja-jp': "自分の手札を1枚トラッシュする。トラッシュできないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556687,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [359],
};

export default card;
