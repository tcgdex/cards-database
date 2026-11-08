import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アマージョ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'ja-jp': "美しい 蹴り技の 使い手。 キックボクシングの チャンピオンも 一撃で ノックアウトするぞ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じょおうのほうび" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分のトラッシュにある[草]エネルギーを1枚、バトルポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "とびひざげり" },
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557199,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アママイコ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [763],
};

export default card;
