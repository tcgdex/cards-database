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

	attacks: [{"name": {"ja": "はねまわる"}, "cost": ["Colorless"], "damage": 20}, {"name": {"ja": "ぜったいれいど"}, "cost": ["Water", "Colorless", "Colorless"], "damage": 60, "effect": {"ja": "次の相手の番、このワザを受けたポケモンは、ワザが使えない。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "Nのバニプッチ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [583],
};

export default card;
