import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "テッカニン",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "あまりに 高速で 動くため 姿が 見えなくなる ことがある。 樹液に 集まってくる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぬぎのこし" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュにある「ヌケニン」を1枚、ベンチに出す。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シザークロス" },
			damage: "40+",
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558835,
			},
		},
	],

	evolveFrom: {
		ja: "ツチニン",
	},

	retreat: 0,
	rarity: "Common",
	dexId: [291],
};

export default card;
