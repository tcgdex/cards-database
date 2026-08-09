import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
		'zh-tw': "阿爾宙斯V",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "電気を ため込む 性質。 ピカチュウが 群れて 暮らす 森は 落雷が 絶えず 危険だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ピカボール",
				'zh-tw': "三重蓄能",
			},
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525310,
				tcgplayer: 597326,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Promo",
	dexId: [25],
};

export default card;
