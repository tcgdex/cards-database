import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "メガタブンネex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "カレイドワルツ" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数×2枚ぶんまで、自分の山札から基本エネルギーを選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "イヤーフォース" },
			damage: "20+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863904,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [531],

	suffix: "EX",
};

export default card;
