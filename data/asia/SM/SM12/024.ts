import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スワンナ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'ja-jp': "優雅な みかけに よらず 翼で 力強く 羽ばたき 数千キロ 飛び続けられる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おいかぜ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の手札にあるエネルギーを1枚、自分のポケモンにつける。",
			},
		},
		{
			name: { ja: "エアスラッシュ" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554813,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コアルヒー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [581],
};

export default card;
