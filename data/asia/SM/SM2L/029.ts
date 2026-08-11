import { Card } from "models/database/card";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤミカラス",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "日暮れに 目覚め 夕闇を 飛ぶ。 ヤミカラスが 飛ぶまでに 家に 帰れ という ことわざも あるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふきとばし" },
			damage: 10,
			cost: ["Darkness"],
			effect: {
				'ja-jp': "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561433,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [198],
};

export default card;
