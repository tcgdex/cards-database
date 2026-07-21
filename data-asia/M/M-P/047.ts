import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "エレズン",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "汚れた 水を 飲んでも 平気。 体内の 器官で 自分には 無害の 毒液に ろ過するぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Darkness"],
			effect: {
				ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "やんちゃげり" },
			damage: 20,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 858265,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [848],
};

export default card;
