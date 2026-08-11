import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "デカヌチャン",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		ja: "知能が 高く とても 豪快。 ハンマーで 岩を 殴り飛ばして 空飛ぶ アーマーガアを 狙う。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "おおぶりスイング 240-" },
			cost: ["Metal"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×60ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863832,
			},
		},
	],

	evolveFrom: {
		ja: "ナカヌチャン",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [959],
};

export default card;
