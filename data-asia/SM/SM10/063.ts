import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "プクリン",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 110,
	types: ["Fairy"],

	description: {
		ja: "弾力の ある ボディーと キメ細やかな 毛皮が 人気。 抱きしめて 寝ると 気持ちいい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たまをみがく" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにあるエネルギーを3枚、相手に見せてから、手札に加える。",
			},
		},
		{
			name: { ja: "スリーピーボール" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557421,
			},
		},
	],

	evolveFrom: {
		ja: "プリン",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [40],
};

export default card;
