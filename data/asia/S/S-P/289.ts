import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒトカゲ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'ja-jp': "熱いものを 好む 性格。 雨に濡れると しっぽの 先から 煙が 出るという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もえるしっぽ" },
			damage: 10,
			cost: ["Fire"],
			effect: {
				'ja-jp': "自分の山札から[R]エネルギーを1枚選び、このポケモンにつける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 664344,
				tcgplayer: 597462,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [4],
};

export default card;
