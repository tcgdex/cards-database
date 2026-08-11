import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "アクア団のベトベトン",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "毒を まとった 巨体で 敵を 包み込んで 動けなくするの。 あなたも 押しつぶして あげる！",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ヘドロまつり" },
			effect: {
				ja: "このポケモンがいるかぎり、おたがいのポケモン全員（「アクア団」をのぞく）のにげるために必要なエネルギーは、それぞれ1個ぶん多くなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ついげき" },
			damage: "60+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが特殊状態なら、60ダメージを追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563728,
			},
		},
	],

	evolveFrom: {
		ja: "アクア団のベトベター",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [89],
};

export default card;
