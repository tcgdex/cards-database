import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ひかるゲノセクト",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "プラズマ団によって 改造された 古代の むしポケモン。 背中の 大砲が パワーアップした。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エナジーリロード" },
			effect: {
				ja: "自分の番に1回使える。自分の場のポケモンについている[草]エネルギーを1個、このポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ガイブラスター" },
			damage: "50+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[草]エネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560168,
			},
		},
	],

	retreat: 2,
	rarity: "Shiny Ultra Rare",
	dexId: [649],
};

export default card;
