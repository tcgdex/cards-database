import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュナイパーGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フェザーアロー" },
			effect: {
				ja: "自分の番に1回使える。相手のポケモン1匹に、ダメカンを2個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はっぱカッター" },
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ホロウハントGX" },
			cost: ["Grass"],
			effect: {
				ja: "自分のトラッシュにある好きなカードを3枚、相手に見せてから、手札に加える。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551531,
			},
		},
	],

	evolveFrom: {
		ja: "フクスロー",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [724],

	suffix: "GX",
};

export default card;
