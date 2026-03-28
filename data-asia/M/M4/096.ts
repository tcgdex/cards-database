import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "スピアーex",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "ビーランブル"}, "cost": ["Grass"], "damage": "110×", "effect": {"ja": "自分の場の「スピアー（『ポケモンex』をふくむ）」の数×110ダメージ。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "コクーン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [15],
	suffix: "EX",
};

export default card;
