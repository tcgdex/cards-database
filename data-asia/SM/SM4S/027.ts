import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "エンニュート",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "なぜか ♀しか 見つかっていない。 ヤトウモリの♂を 引き連れて 逆ハーレムを 作って 暮らす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "わるだくみ" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札にある好きなカードを2枚まで、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "バッドポイズン" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は4個になる。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560339,
			},
		},
	],

	evolveFrom: {
		ja: "ヤトウモリ",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [758],
};

export default card;
