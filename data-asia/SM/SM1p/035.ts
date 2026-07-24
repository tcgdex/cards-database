import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "シロデスナ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "城の 下には 精気を 吸われ 干からびた 者たちの 骨が 大量に 埋まっている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "すなのぼうへき" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "せいきをすいとる" },
			damage: 50,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561563,
			},
		},
	],

	evolveFrom: {
		ja: "スナバァ",
	},

	retreat: 4,
	rarity: "None",
	dexId: [770],
};

export default card;
