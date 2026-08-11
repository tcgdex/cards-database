import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ドードリオ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "３つの 頭が 見ている前で わずかでも すきを 見せると クチバシで 激しく つつかれる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トライアタック" },
			damage: "60×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数x60ダメージ。",
			},
		},
		{
			name: { ja: "かそくづき" },
			damage: 90,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「かそくづき」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557429,
			},
		},
	],

	evolveFrom: {
		ja: "ドードー",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Common",
	dexId: [85],
};

export default card;
