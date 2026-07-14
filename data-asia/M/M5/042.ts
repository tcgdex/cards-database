import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ズガイドス",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "ズガイドス同士が 頭を ぶつけあうことで 頑丈な 頭が さらに 鍛えられる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "つきとばす" },
			damage: 70,
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [408],

	thirdParty: {
		cardmarket: 888297,
	},
};

export default card;
