import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アリゲイツ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "一度 かみつくと キバが 抜けるまで 絶対に 離さない。 抜けた キバは すぐに 生えてくる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "まきこむ" },
			damage: 90,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "自分の山札を上から3枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559166,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ワニノコ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [159],
};

export default card;
