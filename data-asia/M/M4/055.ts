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
		ja: "ゴミを 吸いとっては 体内で 新しい 種類の 毒ガスや 毒の 液体を 生みだしている。",
	},

	stage: "Stage1",
	abilities: [{"type": "Ability", "name": { "ja": "ゴミダウナー" }, "effect": { "ja": "このポケモンがいるかぎり、「ポケモンのどうぐ」がついている相手のバトルポケモンが使うワザのダメージは「-20」される。" }}],

	attacks: [
		{ "name": { "ja": "ヘドロばくだん" }, "damage": "100", "cost": ["Darkness", "Darkness"], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Fighting", "value": "x2" }],
	
	resistances: [],
	
	retreat: 3,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "ヤブクロン",
	},
	rarity: "Uncommon",
	dexId: [569],
	regulationMark: "I",
};

export default card;
