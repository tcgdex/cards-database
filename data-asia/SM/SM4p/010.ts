import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "アマージョ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "脚を 活かした 蹴りが 得意。 倒した 相手を 足蹴に して 高笑いで 勝利を アピール。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じょおうのいげん" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の手札を見て、その中にあるカードを、1枚トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "トロピカルキック" },
			damage: 80,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「20」回復し、特殊状態もすべて回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560043,
			},
		},
	],

	evolveFrom: {
		ja: "アママイコ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [763],
};

export default card;
