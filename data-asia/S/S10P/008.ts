import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "サッチムシ",
		'zh-tw': "索偵蟲",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "いつも せっせと 情報を 集めているので 賢い。 ただし 力は いまいちだ。",
		'zh-tw': "總是孜孜不倦地收集情報，所以頭腦相當地聰明， 但是力量方面就差了一些。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かじる",
				'zh-tw': "咬",
			},
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651067,
				tcgplayer: 569851,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [824],
};

export default card;
