import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼニガメ",
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "長い 首を 甲羅のなかに 引っこめるとき 勢いよく 水鉄砲を 発射する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 664345,
				tcgplayer: 597463,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [7],
};

export default card;
