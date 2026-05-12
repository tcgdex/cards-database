import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "隕石に 付着していた 宇宙ウイルスの ＤＮＡが 変異して 生まれた ポケモン。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "ゲノムチャージ" }, "damage": "", "cost": ["Colorless"], "effect": { "ja": "自分の山札から「基本「Psychic」エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。" } },
		{ "name": { "ja": "サイコキネシス" }, "damage": "80+", "cost": ["Psychic", "Psychic"], "effect": { "ja": "相手のバトルポケモンについているエネルギーの数×20ダメージ追加。" } }
	],

	
	weaknesses: [{ "type": "Darkness", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	rarity: "Uncommon",
	dexId: [386],
	regulationMark: "I",
};

export default card;
