import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴビット",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "粘土から 生み出された 古代の ポケモン。 なぜか 大岩を 並べ続ける ものも いる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "てっぺき" },
			cost: ["Fighting"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "パンチ" },
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752800,
				tcgplayer: 568369,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [622],
};

export default card;
