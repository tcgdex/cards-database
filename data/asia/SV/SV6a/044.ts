import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "キバゴ",
		'zh-tw': "牙牙",
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "岩や 樹木に 独特の 歯形を 見かけたら 近くに キバゴが 棲んでいるはずだ。",
		'zh-tw': "如果在岩石或樹木上 發現了獨特的齒痕， 附近一定棲息著牙牙。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっかく",
				'zh-tw': "抓",
			},
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "するどいキバ",
				'zh-tw': "銳利之牙",
			},
			damage: 30,
			cost: ["Fighting", "Metal"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773793,
				tcgplayer: 566295,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [610],
};

export default card;
