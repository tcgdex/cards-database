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
		ja: "穴に 入りたがる 性質で  ほかの ポケモンが 作った  巣穴を 横取りして 眠る。",
	},

	stage: "Stage1",
	attacks: [
		{ "name": { "ja": "すみふんしゃ" }, "damage": "30", "cost": ["Water"], "effect": { "ja": "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを2回投げる。1回でもウラなら、そのワザは失敗。" } },
		{ "name": { "ja": "あばれまわる" }, "damage": "120", "cost": ["Water"], "effect": { "ja": "このポケモンをこんらんにする。" } }
	],

	
	weaknesses: [{ "type": "Lightning", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "テッポウオ",
	},
	rarity: "Common",
	dexId: [224],
	regulationMark: "I",
};

export default card;
