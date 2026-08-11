import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ウネルミナモex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "こんぺきはとう" },
			effect: {
				ja: "このポケモンが使うワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "カタルシスロアー" },
			damage: "120+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが特殊状態なら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863518,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [1009],

	suffix: "EX",
};

export default card;
