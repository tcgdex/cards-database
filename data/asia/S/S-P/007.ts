import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "サルノリ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "特別な スティックで リズムを 刻むと 草花を 元気にする パワーが 音波になって 広がる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まっしぐら" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 462934,
				tcgplayer: 597234,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [810],
};

export default card;
