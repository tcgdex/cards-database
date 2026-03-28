import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "オクタン",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "すみふんしゃ"}, "cost": ["Water"], "damage": 30, "effect": {"ja": "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを2回投げる。1回でもウラなら、そのワザは失敗。"}}, {"name": {"ja": "あばれまわる"}, "cost": ["Water", "Colorless"], "damage": 120, "effect": {"ja": "このポケモンをこんらんにする。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "テッポウオ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [224],
};

export default card;
