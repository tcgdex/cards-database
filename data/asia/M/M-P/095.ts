import { Card } from "models/database/card";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シェイミ",
	},

	illustrator: "tono",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "グラシデアの花が 咲く 季節 感謝の 心を 届けるために 飛び立つと 言われている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はなのカーテン" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分のベンチポケモン（「ルールを持つポケモン」をのぞく）全員は、相手のワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "けとばす" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [492],
};

export default card;
