import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "オーダイル",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "大きく 力強い アゴで かみつくと そのまま 首を振って 相手を ずたずたに 引きちぎる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "どしゃぶり" },
			effect: {
				ja: "自分の番に何回でも使える。自分の手札にある[水]エネルギーを、1枚トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぎゃくりゅう" },
			damage: "10+",
			cost: ["Water", "Water"],
			effect: {
				ja: "自分のトラッシュにある[水]エネルギーをすべて相手に見せ、その枚数x20ダメージ追加。その後、見せたエネルギーを山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559167,
			},
		},
	],

	evolveFrom: {
		ja: "アリゲイツ",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [160],
};

export default card;
