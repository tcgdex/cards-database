import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ギャロップ",
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "走る 速度は 時速２４０キロ。 たてがみの 炎が 激しく 燃え 矢のように 駆け抜ける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "バーニングラン" },
			damage: "60+",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、60ダメージ追加。",
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
		ja: "ポニータ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [78],
};

export default card;
