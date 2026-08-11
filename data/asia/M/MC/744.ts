import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エンニュート",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'ja-jp': "エンニュートの 群れ同士が 鉢合わせると フェロモンガスで オスを 奪い合う 争いになる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いきなりあぶる" },
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手は相手自身の手札を1枚選び、トラッシュする。この番、このポケモンが「ヤトウモリ」から進化していたなら、さらに2枚トラッシュする。",
			},
		},
		{
			name: { ja: "かえんほうしゃ" },
			damage: 130,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864046,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤトウモリ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [758],
};

export default card;
