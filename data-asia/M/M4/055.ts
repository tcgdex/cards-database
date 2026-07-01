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

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ゴミダウナー",
			},
			effect: {
				ja: "このポケモンがいるかぎり、「ポケモンのどうぐ」がついている相手のバトルポケモンが使うワザのダメージは「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ヘドロばくだん",
			},
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [569],

	thirdParty: {
		cardmarket: 876954
	}
};

export default card;
