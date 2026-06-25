import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "エレズン",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "汚れた 水を 飲んでも 平気。 体内の 器官で 自分には 無害の 毒液に ろ過するぞ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "なかまをよぶ"}, "cost": ["Darkness"], "effect": {"ja": "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"}}, {"name": {"ja": "やんちゃげり"}, "damage": 20, "cost": ["Darkness", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [848],

	thirdParty: {
		cardmarket: 850563,
		tcgplayer: 655835,
	},
};

export default card;