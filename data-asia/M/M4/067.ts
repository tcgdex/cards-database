import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ケンタロス",
	},

	illustrator: "Satoshi Ito",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "ツノを つきあわせて 戦う。 群れを守る 強い ケンタロスは キズだらけの ツノを 自慢する。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "むれでねらう" }, "damage": "", "cost": [], "effect": { "ja": "相手のポケモンを1匹選び、自分の場の、名前に「ケンタロス」とつくポケモンの数ぶんコインを投げる。選んだポケモンに、オモテの数×50ダメージ。［ベンチは弱点・抵抗力を計算しない。］" } }
	],

	
	weaknesses: [{ "type": "Fighting", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Uncommon",
	dexId: [128],
	regulationMark: "I",
};

export default card;
