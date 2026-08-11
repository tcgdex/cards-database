import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャース",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "昼間は だらだら 寝て過ごし 日が 暮れるころに 活動開始。 夜の街で コインを 探す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねこだまし" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561105,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [52],
};

export default card;
