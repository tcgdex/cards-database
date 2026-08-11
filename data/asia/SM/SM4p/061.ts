import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤミカラス",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "日暮れに 目覚め 夕闇を 飛ぶ。 ヤミカラスが 飛ぶまでに 家に 帰れ という ことわざも あるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふきとばし" },
			damage: 10,
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560094,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [198],
};

export default card;
