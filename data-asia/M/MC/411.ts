import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "セキタンザン",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "体を 大きく 振り動かし 燃え上がる 背中から 石炭を あたりに ばら撒いて 威嚇する。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ガトリングタール" },
			damage: "40+",
			cost: ["Fighting"],
			effect: {
				ja: "このポケモンについている[R]エネルギーの数×80ダメージ追加。",
			},
		},
		{
			name: { ja: "やまなだれ" },
			damage: 150,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の山札を上から2枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863713,
			},
		},
	],

	evolveFrom: {
		ja: "トロッゴン",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [839],
};

export default card;
