import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "マナフィ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "生まれたときから 備わっている 不思議な 力を 使うと どんな ポケモンとも 心が 通い合う。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しんかいのめぐみ" },
			effect: {
				ja: "自分の番に1回使える。[水]エネルギーがついている自分のポケモン1匹のHPを「20」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スプラッシュ" },
			damage: 30,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560184,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [490],
};

export default card;
