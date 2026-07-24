import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルオー",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	description: {
		ja: "群れで 獲物を 追う 習性。 大きな 口で ヨワシの 群れごと 一気に 呑み込んでしまうぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダイビング" },
			damage: 40,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "おおうなばら" },
			damage: 80,
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				ja: "自分の[水]ポケモン全員のHPを、それぞれ「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561219,
			},
		},
	],

	evolveFrom: {
		ja: "ホエルコ",
	},

	retreat: 4,
	rarity: "None",
	dexId: [321],
};

export default card;
