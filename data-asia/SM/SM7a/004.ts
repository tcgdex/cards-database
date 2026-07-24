import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "マユルド",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "マユに こもっている あいだに 受けた 攻撃は 進化しても 忘れずに かならず 仕返しする。",
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
			name: { ja: "ぶつかる" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558892,
			},
		},
	],

	evolveFrom: {
		ja: "ケムッソ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [268],
};

export default card;
