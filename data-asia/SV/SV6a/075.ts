import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ペルシアン",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "気性が 激しく 尻尾を まっすぐ 立てたら 要注意。 とびかかって 噛みつく 前触れだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みだれひっかき" },
			damage: "50×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数×50ダメージ。",
			},
		},
		{
			name: { ja: "スラッシュクロー" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773824,
				tcgplayer: 566326,
			},
		},
	],

	evolveFrom: {
		ja: "ニャース",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [53],
};

export default card;
