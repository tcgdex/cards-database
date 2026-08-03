import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "セゴール",
		'zh-tw': "比克提尼ex",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "まわりの 空気を 凍らせて 氷のマスクで 顔を 守り 背びれを 氷の剣に 変える。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "するどいひれ",
				'zh-tw': "狡兔三窟",
			},
			damage: 40,
			cost: ["Water", "Colorless"],
		},
		{
			name: {
				ja: "フロストスマッシュ",
				'zh-tw': "勝利火焰",
			},
			damage: 80,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705377,
				tcgplayer: 587808,
			},
		},
	],

	evolveFrom: {
		ja: "セビエ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [997],
};

export default card;
