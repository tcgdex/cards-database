import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "マフィティフ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "子どもと 遊ぶことが 大好き。 普段は 温厚だが 家族を 守るとき 形相が 変わる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 60,
			cost: ["Darkness", "Darkness"],
		},
		{
			name: { ja: "とびこみヘッド" },
			damage: 210,
			cost: ["Darkness", "Darkness", "Darkness"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「+100」される。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	evolveFrom: {
		ja: "オラチフ",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Common",
	dexId: [943],

	thirdParty: {
		cardmarket: 888313,
	},
};

export default card;
