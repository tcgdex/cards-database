import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴチミル",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "星明りが パワーの 源。 夜になると サイコパワーで 石を 浮かべて 星の 配置を 印す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ビンタ" },
			damage: 20,
			cost: ["Psychic"],
		},
		{
			name: { ja: "サイケこうせん" },
			damage: 30,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561492,
			},
		},
	],

	evolveFrom: {
		ja: "ゴチム",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [575],
};

export default card;
