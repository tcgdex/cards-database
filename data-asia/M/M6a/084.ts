import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ソルガレオ",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "太陽を 食らいし 獣 と かつて 呼ばれた。 無尽蔵の 光エネルギーを 放出する。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "サンライズ" },
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番に1回使える。自分の山札から「基本[M]エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "メテオドライブ" },
			damage: 220,
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908262,
			},
		},
	],

	evolveFrom: {
		ja: "コスモウム",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [791],
};

export default card;
