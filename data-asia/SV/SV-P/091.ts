import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "エレズン",
		'zh-tw': "巢穴球",
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "汚れた 水を 飲んでも 平気。 体内の 器官で 自分には 無害の 毒液に ろ過するぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっとつっこむ" },
			damage: 30,
			cost: ["Lightning"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587849,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [848],
};

export default card;
