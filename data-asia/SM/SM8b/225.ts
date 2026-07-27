import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ジガルデGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "セルコネクター" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある[闘]エネルギーを2枚、このポケモンにつける。",
			},
		},
		{
			name: { ja: "グランドフォース" },
			damage: 130,
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ジャッジメントGX" },
			damage: 150,
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンは「ポケモンGX・EX」からワザのダメージを受けない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551621,
			},
		},
	],

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [718],

	suffix: "GX",
};

export default card;
