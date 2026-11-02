import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "キノココ",
		'zh-tw': "蘑蘑菇",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "頭の てっぺんから 毒胞子を 噴き出す。 胞子を 吸いこむと 体の 節々が 痛くなる。",
		'zh-tw': "會從頭頂上噴出毒孢子。如果不小心吸入了孢子，身上的每處關節都會開始疼痛。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 10,
			cost: ["Grass"],
		},
		{
			name: {
				ja: "タネばくだん",
				'zh-tw': "種子炸彈",
			},
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575554,
				tcgplayer: 569505,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [285],
};

export default card;
