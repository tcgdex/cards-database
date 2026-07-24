import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "スカンプー",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "お尻から 強烈に くさい 液体を 飛ばして 身を 守る。 においは ２４時間 消えない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みちづれガス" },
			damage: 10,
			cost: ["Darkness"],
			effect: {
				ja: "おたがいのバトルポケモンを、それぞれこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559983,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [434],
};

export default card;
