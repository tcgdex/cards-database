import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ブルー",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "唸り声は 相手を 不安に させる。 普段は のんびり屋で １日の 半分は 寝ているよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とつげき" },
			damage: 20,
			cost: ["Fairy"],
			effect: {
				ja: "コインを1回投げウラなら、このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561641,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [209],
};

export default card;
