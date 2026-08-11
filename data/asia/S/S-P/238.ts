import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴローン",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "崖を 転がり 移動する。 間違えて 川に 落ちると 最期の あがきで 大爆発。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 30,
			cost: ["Fighting"],
		},
		{
			name: { ja: "ロックスマッシュ" },
			damage: 70,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 606607,
				tcgplayer: 597420,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イシツブテ",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [75],
};

export default card;
