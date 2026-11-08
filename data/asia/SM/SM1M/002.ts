import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アメタマ",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'ja-jp': "危険が 及ぶと 頭の 先から 甘い味の 液体が にじみだす。 とりポケモンが 嫌いな味だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんこうせっか" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561603,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [283],
};

export default card;
