import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アマージョ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'ja-jp': "脚を 活かした 蹴りが 得意。 倒した 相手を 足蹴に して 高笑いで 勝利を アピール。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じょおうのいげん" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の手札を見て、その中にあるカードを、1枚トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "トロピカルキック" },
			damage: 80,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「20」回復し、特殊状態もすべて回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561682,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アママイコ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [763],
};

export default card;
