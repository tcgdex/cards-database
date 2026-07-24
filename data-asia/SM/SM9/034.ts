import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラゴローン",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "ゴローン同士 争うと あたりに 光と 爆音がする。 地元の 人は 陸花火と 呼んでいる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ころがる" },
			damage: 30,
			cost: [],
		},
		{
			name: { ja: "エレキスラッグ" },
			damage: 100,
			cost: ["Lightning", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558312,
			},
		},
	],

	evolveFrom: {
		ja: "アローライシツブテ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Common",
	dexId: [75],
};

export default card;
