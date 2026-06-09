import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビアル",
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "出会った 獲物は 逃がさない。 自動車の ボディを 食いちぎる 強力な アゴを 持つ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "シメる" },
			damage: 60,
			cost: ["Darkness", "Colorless"],
			effect: { ja: "相手は相手自身の手札を2枚選び、トラッシュする。" },
		},
		{
			name: { ja: "カースドスラッグ" },
			damage: "120+",
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: { ja: "相手の手札が3枚以下なら、120ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		ja: "ワルビル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [553],

	thirdParty: {
		cardmarket: 828581,
		tcgplayer: 636416,
	},
};

export default card;
