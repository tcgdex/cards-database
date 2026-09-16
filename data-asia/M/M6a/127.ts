import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウex",
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ビリビリフィーバー" },
			cost: ["Lightning"],
			effect: {
				ja: "自分の手札から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "かみなり" },
			damage: 200,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908305,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Special illustration rare",
	dexId: [25],

	suffix: "EX",
};

export default card;
