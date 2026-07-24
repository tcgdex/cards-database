import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "モンメン",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "綿を 飛ばして 身を 守る。 雨に 濡れると 綿が 湿って 重くなり 身動きが とれなくなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちりあつめ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557024,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [546],
};

export default card;
