import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "シズクモ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "獲物や 敵を 見つけると 頭に 被った 水泡を 弾いて 水を ぶつけるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "クモのす" },
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559761,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [751],
};

export default card;
