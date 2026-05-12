import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "スピアーex",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage2",
	attacks: [
		{ "name": { "ja": "ビーランブル" }, "damage": "110x", "cost": ["Grass"], "effect": { "ja": "自分の場の「スピアー（『ポケモンex』をふくむ）」の数×110ダメージ。" } }
	],

	
	weaknesses: [{ "type": "Fire", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "コクーン",
	},
	rarity: "Double rare",
	regulationMark: "I",
};

export default card;
