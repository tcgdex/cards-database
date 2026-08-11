import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロア",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "相手の 姿に 化けてみせて 驚かせる。 無口な 子供に 化けている ことが 多いらしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とっしん" },
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863769,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [570],
};

export default card;
