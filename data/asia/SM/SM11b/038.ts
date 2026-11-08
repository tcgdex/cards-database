import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハーデリア",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "黒い 体毛は 育つほど 硬く 丈夫に なって ツメや キバも 簡単には 通さないぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ふるいたてる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+60」される。",
			},
		},
		{
			name: { ja: "とびだしヘッド" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555221,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヨーテリー",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [507],
};

export default card;
