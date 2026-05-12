import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "シロナのミカルゲ",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "いつも 悪さばかり していたら 不思議な 術で 本体を 要石に 縛りつけられた。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "レイジングカース"}, "damage": "10x", "cost": ["Colorless"], "effect": {"ja": "自分のベンチの「シロナのポケモン」全員にのっているダメカンの数×10ダメージ。このワザのダメージは弱点を計算しない。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [442],
};

export default card;
