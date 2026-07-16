import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラロコン",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "マイナス５０度の 冷気を 吐く。 アローラの老人は ケオケオという 昔の 名前で 呼ぶことも。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほえる" },
			cost: [],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "スノーアイス" },
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560055,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [37],
};

export default card;
