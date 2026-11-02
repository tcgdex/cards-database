import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オーガポン かまどのめんex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いかりがま" },
			damage: "20×",
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×20ダメージ。",
			},
		},
		{
			name: { ja: "ダイナミックブレイズ" },
			damage: "140+",
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、140ダメージ追加。その場合、このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863445,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [1017],

	suffix: "EX",
};

export default card;
