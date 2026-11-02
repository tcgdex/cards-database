import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "モンメン",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: ["Fairy"],

	description: {
		ja: "綿を 飛ばして 身を 守る。 雨に 濡れると 綿が 湿って 重くなり 身動きが とれなくなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふくらむ" },
			damage: 10,
			cost: ["Fairy"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-10」される。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557423,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [546],
};

export default card;
