import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロコン",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'ja-jp': "美しい シッポで 大人気。 ただし まめに ブラッシングしないと あっという間に 毛玉だらけになる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しっぽをふる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543476,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [37],
};

export default card;
