import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "隕石に 付着していた 宇宙ウイルスの ＤＮＡが 変異して 生まれた ポケモン。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "サイコプロテクト" }, "damage": "80", "cost": ["Psychic", "Psychic"], "effect": { "ja": "次の相手の番、このポケモンは特性を持つポケモンからワザのダメージを受けない。" } }
	],

	
	weaknesses: [{ "type": "Darkness", "value": "x2" }],
	
	resistances: [],
	
	retreat: 3,

	variants: [{"type": "normal"}],
	rarity: "Uncommon",
	dexId: [386],
	regulationMark: "I",
};

export default card;
