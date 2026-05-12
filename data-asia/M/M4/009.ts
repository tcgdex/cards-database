import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "キュウコン",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "黄金に 輝く 体毛と ９本の 長い 尻尾を 持つ。 １０００年は 生きると 言われる。",
	},

	stage: "Stage1",
	attacks: [
		{ "name": { "ja": "きゅうびうつし" }, "damage": "", "cost": ["Fire"], "effect": { "ja": "自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。" } },
		{ "name": { "ja": "おにび" }, "damage": "70", "cost": ["Fire", "Fire"], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Water", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "ロコン",
	},
	rarity: "Uncommon",
	dexId: [38],
	regulationMark: "I",
};

export default card;
