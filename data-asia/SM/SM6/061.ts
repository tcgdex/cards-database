import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ニンフィア",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Fairy"],

	description: {
		ja: "獲物を 見つけると リボン状の 触角を 揺らし 油断 させ スキが できると 飛びかかる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "めくばせ" },
			cost: ["Colorless"],
			effect: {
				ja: "相手の手札を見る。のぞむなら、その中にあるサポートを、1枚トラッシュする。その場合、そのサポートの効果を、このワザの効果として使う。",
			},
		},
		{
			name: { ja: "マジカルショット" },
			damage: 40,
			cost: ["Fairy", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559606,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [700],
};

export default card;
