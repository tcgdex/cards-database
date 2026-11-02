import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "エモンガ",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "頬の 電気袋で 作った 電気を 膜の 内側に 溜めて 滑空しながら 電気を 放つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちいさなおつかい" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "スカイリターン" },
			damage: 30,
			cost: ["Lightning"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、手札にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876929,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [587],
};

export default card;
