import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "隕石に 付着していた 宇宙ウイルスの ＤＮＡが 変異して 生まれた ポケモン。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "サイコスピア" }, "damage": "120", "cost": ["Psychic", "Psychic", "Psychic"], "effect": { "ja": "このワザを使うためのエネルギーより、2個多くエネルギーがついているなら、相手のベンチポケモン1匹にも、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］" } }
	],

	
	weaknesses: [{ "type": "Darkness", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Uncommon",
	dexId: [386],
	regulationMark: "I",
};

export default card;
