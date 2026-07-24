import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "アクア団のグラエナ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "統率力 バツグンの コンビネーション 攻撃が 得意！ 襲われたら 手も足も 出ないぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "チームインパクト" },
			damage: "30×",
			cost: ["Water", "Colorless"],
			effect: {
				ja: "自分の場の「アクア団」のポケモンの数ぶんコインを投げ、オモテの数x30ダメージ。",
			},
		},
		{
			name: { ja: "かみくだく" },
			damage: 80,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563738,
			},
		},
	],

	evolveFrom: {
		ja: "アクア団のポチエナ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [262],
};

export default card;
