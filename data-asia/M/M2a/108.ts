import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "シロナのミカルゲ",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "いつも 悪さばかり していたら 不思議な 術で 本体を 要石に 縛りつけられた。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "レイジングカース"}, "cost": ["Colorless"], "damage": "10×", "effect": {"ja": "自分のベンチの「シロナのポケモン」全員にのっているダメカンの数×10ダメージ。このワザのダメージは弱点を計算しない。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [442],
};

export default card;
