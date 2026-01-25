import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロア",
	},

	illustrator: "Naoki Saito",
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
			effect: { ja: "このポケモンにも10ダメージ。" },
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [570],
	thirdParty: {
		cardmarket: 829499,
		tcgplayer: 636693,
	},
};

export default card;
