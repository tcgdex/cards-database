import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オニゴーリ",
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "空気中の 水分を 一瞬で 凍らせることで 獲物が 逃げられないように する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダメージビート" },
			damage: "20×",
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×20ダメージ。",
			},
		},
		{
			name: { ja: "クレイジーヘッズ" },
			damage: 140,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863483,
			},
		},
	],

	evolveFrom: {
		ja: "ユキワラシ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [362],
};

export default card;
