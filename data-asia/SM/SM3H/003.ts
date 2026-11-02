import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ラフレシア",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "花びらが 大きいほど たくさん 花粉を 出すが 頭が 重たくて 疲れてしまうという。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "にがにがかふん" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のたねポケモンはワザが使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダウナーショック" },
			damage: 60,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをねむりにする。ウラなら、相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561067,
			},
		},
	],

	evolveFrom: {
		ja: "クサイハナ",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [45],
};

export default card;
