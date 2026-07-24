import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "スコヴィランex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ダブルタイプ" },
			effect: {
				ja: "このポケモンは、場にいるかぎり[G]と[R]の2つのタイプになる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スパイシーレイジ" },
			damage: "10+",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863443,
			},
		},
	],

	evolveFrom: {
		ja: "カプサイジ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [952],

	suffix: "EX",
};

export default card;
