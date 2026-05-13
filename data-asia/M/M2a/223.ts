import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガリザードンXex",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 360,
	types: ["Fire"],

	stage: "Stage2",

	attacks: [{"name": {"ja": "インフェルノX"}, "damage": "90x", "cost": ["Fire", "Fire"], "effect": {"ja": "自分の場のポケモンについている「Fire」エネルギーを好きなだけトラッシュし、その枚数×90ダメージ。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "リザード",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
