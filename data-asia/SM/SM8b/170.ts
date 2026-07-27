import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌオー",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "のんびりとした 性格で 気ままに 泳いでは いつも 船底に 頭を ぶつけている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "おしながす" },
			effect: {
				ja: "自分の番に何回でも使える。自分のベンチポケモンについている[水]エネルギーを1個、バトルポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ハイドロポンプ" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551346,
			},
		},
	],

	evolveFrom: {
		ja: "ウパー",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [195],
};

export default card;
