import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ハヤシガメ",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "森の 中の 水辺で 暮らす。 昼間は 森の 外に 出て 甲羅の 木に 光を 当てる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いあいぎり" },
			damage: 20,
			cost: ["Grass"],
		},
		{
			name: { ja: "こうらでぶつかる" },
			damage: 50,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752853,
				tcgplayer: 568406,
			},
		},
	],

	evolveFrom: {
		ja: "ナエトル",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [388],
};

export default card;
