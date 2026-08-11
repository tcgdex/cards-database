import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "カラサリス",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "糸に ついた 朝露を 飲んで 進化の ときを 待ち続ける。 硬い 繭が 攻撃を 防ぐ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "まゆがあつまる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある「カラサリス」または「マユルド」を合計4枚まで、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "ころがりタックル" },
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558832,
			},
		},
	],

	evolveFrom: {
		ja: "ケムッソ",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [266],
};

export default card;
