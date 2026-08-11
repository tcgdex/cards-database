import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ネイティ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "普段は 地上で エサを 探すが ごくたまに 木の枝に 飛び乗って 木の芽を ついばんだりする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ロストマーチ" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のロストゾーンにあるポケモン（♢（プリズムスター）をのぞく）の枚数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543821,
			},
		},
	],

	retreat: 1,
	regulationMark: "B",
	rarity: "None",
	dexId: [177],
};

export default card;
