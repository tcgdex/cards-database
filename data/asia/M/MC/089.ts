import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ギャロップ",
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'ja-jp': "走る 速度は 時速２４０キロ。 たてがみの 炎が 激しく 燃え 矢のように 駆け抜ける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "バーニングラン" },
			damage: "60+",
			cost: ["Fire", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863383,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ポニータ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [78],
};

export default card;
