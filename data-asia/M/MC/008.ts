import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのウツボット",
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "体内に 取りこまれた ものは どんなに 硬くても 溶解液で 跡形なく 溶かされてしまう。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "はなぞのロンド" },
			damage: "40×",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "自分の場の「エリカのポケモン」の数×40ダメージ。",
			},
		},
		{
			name: { ja: "ソーラービーム" },
			damage: 130,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863295,
			},
		},
	],

	evolveFrom: {
		ja: "エリカのウツドン",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "None",
	dexId: [71],
};

export default card;
