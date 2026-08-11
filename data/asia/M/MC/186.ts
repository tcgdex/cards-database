import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ユキワラシ",
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "ユキワラシが 訪れた 家は お金持ちに なると 言われている。 マイナス １００度でも へっちゃら。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おどろかす" },
			damage: 20,
			cost: ["Water", "Colorless"],
			effect: {
				'ja-jp': "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見て、相手の山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863482,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [361],
};

export default card;
