import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ノズパス",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "ノズパスの 鼻の 磁石は 絶対 狂わないので 旅する トレーナーの 良き パートナーだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "つきあげる" },
			damage: "30+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561497,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [299],
};

export default card;
