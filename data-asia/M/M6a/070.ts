import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガマゲロゲ",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "全身の コブを 震わせて 地震のような 揺れを 起こす。 グレッグルと 近い 種類。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ゆさぶるこぶし" },
			damage: 60,
			cost: ["Fighting"],
			effect: {
				ja: "次の相手の番、相手は手札からトレーナーズを出して使うたび、使う前にコインを1回投げる。ウラなら、そのカードは使ったことにならず、トラッシュする。",
			},
		},
		{
			name: { ja: "メガトンパンチ" },
			damage: 180,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908248,
			},
		},
	],

	evolveFrom: {
		ja: "ガマガル",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "None",
	dexId: [537],
};

export default card;
