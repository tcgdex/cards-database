import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドクケイル",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'ja-jp': "夜行性の ポケモン。 明かりに 誘われた ドクケイルが 街路樹の 葉を 食い散らかす。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "さざめくかぜ" },
			effect: {
				'ja-jp': "自分の番に1回使える。コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、相手の手札にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ゆうやみどく" },
			damage: 100,
			cost: ["Grass", "Grass"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくとねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861438,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マユルド",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [269],
};

export default card;
