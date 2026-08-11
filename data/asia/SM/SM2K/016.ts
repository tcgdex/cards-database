import { Card } from "models/database/card";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オニゴーリ",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'ja-jp': "登頂 間近に 雪山で 遭難した 登山家の 無念が 岩に 取りつき 生まれたと いう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみくだく" },
			damage: 40,
			cost: ["Water", "Water"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "いかりのひょうかい" },
			damage: "70+",
			cost: ["Water", "Water", "Water"],
			effect: {
				'ja-jp': "このポケモンにダメカンがのっているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561482,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ユキワラシ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [362],
};

export default card;
