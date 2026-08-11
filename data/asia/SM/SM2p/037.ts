import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニューラ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "ずる賢く 獰猛な 性質。 親が いない スキに 巣穴に 侵入。 タマゴを 盗みだす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つめとぎ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンの「きりさく」のダメージは「80」になる。",
			},
		},
		{
			name: { ja: "きりさく" },
			damage: 20,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561279,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [215],
};

export default card;
