import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "コレクレー",
	},

	illustrator: "Fujimoto Gold",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "古い コインを 背負い さまよう。 コインを 拾おうとした 人の 生気を 吸い取って 生きている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たくさんあるく" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908245,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [999],
};

export default card;
