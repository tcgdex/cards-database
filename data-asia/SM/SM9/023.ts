import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "カメックス",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "体が 重たく のしかかって 相手を 気絶させる。 ピンチのときは 殻に 隠れる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パワースコール" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から6枚見て、その中にある[水]エネルギーを好きなだけ、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ハイドロタックル" },
			damage: 150,
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558301,
			},
		},
	],

	evolveFrom: {
		ja: "カメール",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [9],
};

export default card;
