import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "スピアーex",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ビーランブル" },
			damage: "110×",
			cost: ["Grass"],
			effect: {
				ja: "自分の場の「スピアー（『ポケモンex』をふくむ）」の数×110ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 876901,
			},
		},
	],

	evolveFrom: {
		ja: "コクーン",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Double rare",
	dexId: [15],

	suffix: "EX",
};

export default card;
