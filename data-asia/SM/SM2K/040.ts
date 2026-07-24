import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャランゴ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "雄叫びと ともに 獲物に 飛びかかる。 ウロコの パンチは 相手を ズタズタに 引き裂くぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ずつき" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ドラゴンクロー" },
			damage: 80,
			cost: ["Lightning", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561506,
			},
		},
	],

	evolveFrom: {
		ja: "ジャラコ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [783],
};

export default card;
