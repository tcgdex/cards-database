import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアス",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "テレパシーで 人間と 気持ちを 通わせる。 光を 屈折させる 羽毛で 別の 姿に 変わる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ドリームミスト" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチの[竜]タイプのたねポケモン全員に、トラッシュにある基本エネルギーを1枚ずつつける。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559027,
			},
		},
	],

	retreat: 1,
	rarity: "Rare Holo",
	dexId: [380],
};

export default card;
