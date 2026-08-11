import { Card } from "models/database/card";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガリザードンXex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 360,
	types: ["Fire"],

	description: {
		'ja-jp': "",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "インフェルノX"}, "damage": "90x", "cost": ["Fire", "Fire"], "effect": {"ja": "自分の場のポケモンについているエネルギーを好きなだけトラッシュし、その枚数×90ダメージ。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		'ja-jp': "メガリザードンYex",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [6],

	thirdParty: {
		cardmarket: 850602,
		tcgplayer: 655873,
	},
};

export default card;