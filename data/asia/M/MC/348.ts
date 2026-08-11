import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "バウッツェルex",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "まんぷくタイム" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の進化ポケモン全員のHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ワンダーシャイン" },
			damage: 130,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863650,
			},
		},
	],

	evolveFrom: {
		ja: "パピモッチ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [927],

	suffix: "EX",
};

export default card;
