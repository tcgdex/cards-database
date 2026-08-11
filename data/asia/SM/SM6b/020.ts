import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルンパッパ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'ja-jp': "楽しい 音楽の リズムが ルンパッパの 細胞を 活性化させて パワーを 発揮するのだ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "すいすいダンス" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分の山札を1枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "みんなでステップ" },
			damage: "70+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモン以外の、おたがいの場のポケモンの数x10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559170,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ハスブレロ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [272],
};

export default card;
