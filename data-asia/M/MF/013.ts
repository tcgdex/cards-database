import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "マリルリ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "じっと 耳を すますと 激しい 流れの 川の 中に なにが いるのか 聞き分けられる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "のしかかり" },
			damage: 90,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908375,
			},
		},
	],

	evolveFrom: {
		ja: "マリル",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [184],
};

export default card;
