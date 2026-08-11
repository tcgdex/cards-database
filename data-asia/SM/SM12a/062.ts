import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "カラマネロ",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "催眠術で おびき寄せて 頭の 触手で 絡め取り 消化液を 浴びせて しとめる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "サイコリチャージ" },
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュにある[超]エネルギーを1枚、ベンチポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ねんどうだん" },
			damage: 60,
			cost: ["Psychic", "Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543851,
			},
		},
	],

	evolveFrom: {
		ja: "マーイーカ",
	},

	retreat: 2,
	regulationMark: "B",
	rarity: "None",
	dexId: [687],
};

export default card;
