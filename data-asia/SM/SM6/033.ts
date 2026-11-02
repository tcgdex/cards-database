import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトツキ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "剣の 柄を 握った 人の 腕に 青い 布を 巻きつけて 倒れるまで 命を 吸い取る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きんぞくおん" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559578,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [679],
};

export default card;
