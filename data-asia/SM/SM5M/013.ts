import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "フロストロトム",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "プラズマで できた 体を 持つ。 電化製品に 潜りこみ 悪さを することで 知られている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ロトモーター" },
			effect: {
				ja: "自分のトラッシュに「ポケモンのどうぐ」が9枚以上あるなら、このポケモンが使うワザに必要なエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "フロストクラッシュ" },
			damage: "10+",
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手の場のポケモンについているエネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559826,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [479],
};

export default card;
