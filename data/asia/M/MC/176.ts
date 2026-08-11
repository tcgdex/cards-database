import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハスブレロ",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "キタカミの 古い 伝承には いたずら好きの 子供が ポケモンに 生まれ変わったと 記されている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アクアスラッシュ" },
			damage: 70,
			cost: ["Water", "Water"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863472,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ハスボー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [271],
};

export default card;
