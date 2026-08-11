import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ナゲツケサル",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "ボスが 選んだ １０匹で 狩りに 出かけ 取ってきた エサを 群れの 仲間で 平等に 分け合う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れんけいスロー" },
			damage: "20×",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "自分の場のたねポケモンの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863709,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [766],
};

export default card;
