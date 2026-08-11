import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーバー",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "火山の 火口近くで 見つかった。 口から 炎を 吐く。 体温は １２００度もある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やきこがす" },
			damage: 30,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863385,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [126],
};

export default card;
