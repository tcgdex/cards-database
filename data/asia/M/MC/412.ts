import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タタッコ",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "餌を 求め 地上に 上がる。 好奇心旺盛で 目にしたものは とりあえず 触手で 殴る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっとつっこむ" },
			damage: 30,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863714,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [852],
};

export default card;
