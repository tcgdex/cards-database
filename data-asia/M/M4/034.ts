import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "隕石に 付着していた 宇宙ウイルスの ＤＮＡが 変異して 生まれた ポケモン。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "サイコスピード" }, "damage": "30", "cost": ["Psychic"], "effect": { "ja": "のぞむなら、自分の手札が5枚になるように、山札を引く。" } }
	],

	
	weaknesses: [{ "type": "Darkness", "value": "x2" }],
	
	resistances: [],
	

	variants: [{"type": "normal"}],
	rarity: "Uncommon",
	dexId: [386],
	regulationMark: "I",
};

export default card;
