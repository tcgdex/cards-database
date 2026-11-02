import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "シェイミ",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "グラシデアの花が 咲く 季節 感謝の 心を 届けるために 飛び立つと 言われている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フローラルヒール" },
			effect: {
				ja: "自分の番に1回使える。自分のバトル場の[草]ポケモンのHPを「20」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558838,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [492],
};

export default card;
