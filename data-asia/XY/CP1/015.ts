import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマ団のグラードンEX",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パワーセーバー" },
			effect: {
				ja: "おたがいの場にいる「マグマ団」のポケモンの合計が4匹以下なら、このポケモンはワザが使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マグマクエイク" },
			damage: "80+",
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "ダメージを与えるとき、すでに相手のバトルポケモンにダメカンがのっているなら、80ダメージを追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563735,
			},
		},
	],

	retreat: 4,
	rarity: "Double rare",
	dexId: [383],

	suffix: "EX",
};

export default card;
