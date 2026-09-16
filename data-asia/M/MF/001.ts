import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "トロピウス",
	},

	illustrator: "Minahamu",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "いつも 同じ 果物ばかり 食べていたら のど元に とても 美味しい 果物が 生えてきた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まきかえす" },
			damage: "30+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "カッターウインド" },
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908363,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [357],
};

export default card;
