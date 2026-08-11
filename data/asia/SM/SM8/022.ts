import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "エンテイ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "エンテイが ほえると 世界の どこかの 火山が 噴火すると 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのおのキバ" },
			damage: 20,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "ふんか" },
			damage: "80+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "おたがいの山札を上から1枚ずつトラッシュし、その中のエネルギーの枚数x60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558661,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [244],
};

export default card;
