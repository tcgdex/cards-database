import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ニューラ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "ツメで タマゴに 穴を 開けて 中味を すする。 ブリーダーに 憎まれ 駆除 されることもある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みだれひっかき" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数x10ダメージ。",
			},
		},
		{
			name: { ja: "ふくろだたき" },
			damage: "30×",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "自分の場のポケモンの数ぶんコインを投げ、オモテの数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559187,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [215],
};

export default card;
