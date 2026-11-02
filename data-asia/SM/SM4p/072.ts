import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "マギアナ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "５００年以上前に 造られた 人造ポケモン。 人の 言葉を 理解するが しゃべれない。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きせかえ" },
			effect: {
				ja: "自分の番に1回使える。自分の場のポケモンについている「ポケモンのどうぐ」を1枚、手札にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ボールアタック" },
			damage: 60,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560105,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [801],
};

export default card;
