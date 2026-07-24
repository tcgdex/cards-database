import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュプトル",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "密林に 生息する。 枝から 枝へ 飛び移りながら 移動して 獲物に 接近する。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "たいようのめぐみ" },
			effect: {
				ja: "自分の番に1回使える。自分の山札にある[草]ポケモンを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スライスブレード" },
			damage: 40,
			cost: ["Grass", "Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543426,
			},
		},
	],

	evolveFrom: {
		ja: "キモリ",
	},

	retreat: 2,
	regulationMark: "B",
	rarity: "None",
	dexId: [253],
};

export default card;
