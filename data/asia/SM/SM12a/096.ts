import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピィ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "流れ星の 多い 夜に 群れ 輪になって ダンス。 その 姿を 見ると ちょっと いいことが あるよ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はりきりドロー" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。コインを1回投げオモテなら、自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544116,
			},
		},
	],

	retreat: 0,
	regulationMark: "C",
	rarity: "None",
	dexId: [173],
};

export default card;
