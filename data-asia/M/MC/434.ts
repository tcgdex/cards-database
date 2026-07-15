import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニドクイン",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "背中の 棘の 隙間に 子どもを 乗せて あやす。 そのときに 毒が 出ることは けっして ないのだ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ラブインパクト" },
			damage: "60+",
			cost: ["Darkness"],
			effect: {
				ja: "自分のベンチに、名前に「ニドキング」とつくポケモンがいるなら、120ダメージ追加。",
			},
		},
		{
			name: { ja: "メガトンキック" },
			damage: 130,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863736,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のニドリーナ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [31],
};

export default card;
