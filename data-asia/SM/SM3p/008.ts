import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "シェイミ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "大気の 毒素を 分解して 荒れた 大地を 一瞬のうちに 花畑にする 力を 持つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぱたぱた" },
			cost: ["Grass"],
			effect: {
				ja: "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。",
			},
		},
		{
			name: { ja: "まきかえす" },
			damage: "30+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560166,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [492],
};

export default card;
