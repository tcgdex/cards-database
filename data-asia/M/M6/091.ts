import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨワシex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "オーシャンゲイン" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。このポケモンのHPを「50」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ハイドロスプラッシュ" },
			damage: 220,
			cost: ["Water", "Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900117,
				tcgplayer: 709244,
				cardtrader: 403174,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Ultra Rare",
	dexId: [746],

	suffix: "EX",
};

export default card;
