import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "モンメン",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 40,
	types: ["Fairy"],

	description: {
		ja: "綿を 飛ばして 身を 守る。 雨に 濡れると 綿が 湿って 重くなり 身動きが とれなくなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ロストマーチ" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "分のロストゾーンにあるポケモン（♢（プリズムスター）をのぞく）の枚数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544121,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [546],
};

export default card;
