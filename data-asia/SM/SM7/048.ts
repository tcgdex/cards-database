import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ネンドール",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "２万年前の 古代人が 泥で 作った 人形に 命が 宿ったと 言われている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ねんりき" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ミラクルスピン" },
			damage: "40×",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある「ダイゴの決断」の枚数x40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559009,
			},
		},
	],

	evolveFrom: {
		ja: "ヤジロン",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [344],
};

export default card;
