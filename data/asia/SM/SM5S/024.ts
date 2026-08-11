import { Card } from "models/database/card";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バクガメス",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "鼻の 孔から 炎や 毒ガスを 吹く。 フンは 爆発物で 色んな 使い道が ある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やきこがす" },
			damage: 10,
			cost: ["Fire"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "ばくねつほう" },
			damage: 100,
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559978,
			},
		},
	],

	retreat: 4,
	rarity: "Common",
	dexId: [776],
};

export default card;
