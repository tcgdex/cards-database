import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "マシェード",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 100,
	types: ["Fairy"],

	description: {
		ja: "夜中に マシェードの棲む 森に いくのは 危険。 怪しい光に 惑わされ 二度と 帰れなくなる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ちからをすいとる" },
			damage: 30,
			cost: ["Fairy", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x30ダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "ねむりのはどう" },
			damage: 60,
			cost: ["Fairy", "Colorless", "Colorless"],
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
				cardmarket: 561040,
			},
		},
	],

	evolveFrom: {
		ja: "ネマシュ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [756],
};

export default card;
