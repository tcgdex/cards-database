import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シビルドン",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		'ja-jp': "吸盤の 口で 獲物に 吸いつき 食いこませた キバから 電気を 流して 感電させる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "でんきぬま" },
			effect: {
				'ja-jp': "自分の番に、このカードが手札にあり、自分の場に[雷]エネルギーが合計4枚以上あるなら、1回使える。このカードをベンチに出す。その後、自分の場のポケモンについている[雷]エネルギーを好きなだけ、このカードにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "むしゃぶりつく" },
			damage: 130,
			cost: ["Lightning", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556986,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シビビール",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [604],
};

export default card;
