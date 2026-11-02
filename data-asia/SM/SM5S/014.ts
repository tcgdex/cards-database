import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "シェイミ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "グラシデアの花が 咲く 季節 感謝の 心を 届けるために 飛び立つと 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "てまねき" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある、それぞれちがうタイプのたねポケモンを3枚まで、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "アロマスリープ" },
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559968,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [492],
};

export default card;
