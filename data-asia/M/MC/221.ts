import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ウネルミナモ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "謎多き 凶暴な 生物。 古い 探検記に 記された 水の 怪物から 名付けられた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "オーロラゲイン" },
			damage: 20,
			cost: ["Water"],
			effect: {
				ja: "このポケモンのHPを「20」回復する。",
			},
		},
		{
			name: { ja: "うねりさく" },
			damage: "20×",
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンを9個までのせ、のせた数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863517,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [1009],
};

export default card;
