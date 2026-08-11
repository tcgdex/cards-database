import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ハピナスex",
	},

	illustrator: "Iwamoto05",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハッピースイッチ" },
			effect: {
				ja: "自分の番に1回使える。自分の場のポケモンについている基本エネルギーを1個選び、自分の別のポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "おんがえし" },
			damage: 180,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札が6枚になるように、山札を引く。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863864,
			},
		},
	],

	evolveFrom: {
		ja: "ラッキー",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [242],

	suffix: "EX",
};

export default card;
