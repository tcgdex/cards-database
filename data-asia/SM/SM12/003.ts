import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "リリーラ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "古代の 暖かい 海に いた。 海草に 化け 獲物を 待ち伏せ 近寄ったところを 丸呑みにする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あやしいひかり" },
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "タネばくだん" },
			damage: 60,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554753,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [345],
};

export default card;
