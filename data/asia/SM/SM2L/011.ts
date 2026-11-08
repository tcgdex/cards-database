import { Card } from "models/database/card";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホエルオー",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	description: {
		'ja-jp': "群れで 獲物を 追う 習性。 大きな 口で ヨワシの 群れごと 一気に 呑み込んでしまうぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダイビング" },
			damage: 40,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "おおうなばら" },
			damage: 80,
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "自分の[水]ポケモン全員のHPを、それぞれ「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561415,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ホエルコ",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [321],
};

export default card;
