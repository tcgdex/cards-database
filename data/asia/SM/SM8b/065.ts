import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ニューラ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "ツメで タマゴに 穴を 開けて 中味を すする。 ブリーダーに 憎まれ 駆除 されることもある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こっそりこわす" },
			cost: ["Colorless"],
			effect: {
				ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。相手の場のポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "おそいかかる" },
			damage: "10+",
			cost: ["Darkness"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550811,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [215],
};

export default card;
