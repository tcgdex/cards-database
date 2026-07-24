import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルコ",
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "海水を たくさん 飲みこむと 体が ボールの ように 弾む。 毎日 １トンの エサを 食べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なみのり" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863476,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [320],
};

export default card;
