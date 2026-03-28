import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ダストダス",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "ゴミダウナー"}, "effect": {"ja": "このポケモンがいるかぎり、「ポケモンのどうぐ」がついている相手のバトルポケモンが使うワザのダメージは「-20」される。"}}],

	attacks: [{"name": {"ja": "ヘドロばくだん"}, "cost": ["Darkness", "Darkness", "Colorless"], "damage": 100}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ヤブクロン",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [569],
};

export default card;
