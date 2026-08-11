import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アノホラグサ",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "乾燥地帯を 放浪する。 ごくまれに 大量発生して 町ひとつを 埋めつくしてしまう。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ざっそうだましい" },
			effect: {
				ja: "相手がすでにとったサイド1枚につき、このポケモンの最大HPは「＋50」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "パワフルニードル" },
			damage: "80×",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×80ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863364,
			},
		},
	],

	evolveFrom: {
		ja: "アノクサ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [947],
};

export default card;
