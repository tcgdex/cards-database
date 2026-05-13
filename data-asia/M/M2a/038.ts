import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのバニリッチ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "あたりの 空気を 冷やして 氷の 粒を 発生させて 敵の 体を 凍りつかせる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "はねまわる"}, "damage": "20", "cost": ["Colorless"], "effect": {"ja": ""}}, {"name": {"ja": "ぜったいれいど"}, "damage": "60", "cost": ["Water"], "effect": {"ja": "次の相手の番、このワザを受けたポケモンは、ワザが使えない。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "Nのバニプッチ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [583],
};

export default card;
