import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ライチュウ",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'ja-jp': "身体に 電気が たまるに つれ 攻撃的に。 実は 電気が ストレスなのでは という 説もある。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほっぺすりすり" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "パワフルスパーク" },
			damage: "20×",
			cost: ["Lightning"],
			effect: {
				'ja-jp': "自分の場のポケモンについている[雷]エネルギーの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555156,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ピカチュウ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [26],
};

export default card;
