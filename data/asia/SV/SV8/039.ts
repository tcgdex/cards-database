import { Card } from "models/database/card";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゼブライカ",
		'zh-tw': "雷電斑馬",
		'zh-cn': "雷電斑馬",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'ja-jp': "雷鳴を 聞くと 群れの シママが 雷から 充電できるように 群れで 雷雲を 追いかける。",
		'zh-tw': "為了讓群體裡的斑斑馬能 透過雷電充電，只要一聽到 雷鳴聲，就會成群追趕雷雲。",
		'zh-cn': "為了讓群體裡的斑斑馬能 透過雷電充電，只要一聽到 雷鳴聲，就會成群追趕雷雲。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "キック",
				'zh-tw': "踢",
				'zh-cn': "踢",
			},
			damage: 30,
			cost: ["Lightning"],
		},
		{
			name: {
				'ja-jp': "マッハボルト",
				'zh-tw': "音速伏特",
				'zh-cn': "音速伏特",
			},
			damage: 120,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793473,
				tcgplayer: 587619,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シママ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [523],
};

export default card;
