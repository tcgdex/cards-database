import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "スピアーex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ビーランブル",
			},
			damage: "110x",
			cost: ["Grass"],
			effect: {
				ja: "自分の場の「スピアー（『ポケモンex』をふくむ）」の数×110ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],
	variants: [{ type: "holo" }],
	retreat: 1,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [15],
	suffix: "EX",

	thirdParty: {
		cardmarket: 876901
	}
};

export default card;
