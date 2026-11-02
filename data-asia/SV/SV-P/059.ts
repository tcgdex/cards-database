import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "フシギダネ",
		'zh-tw': "爆香猴",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "生まれて しばらくの あいだ 背中の タネに つまった 栄養を とって 育つ。",
		'zh-tw': "在火山的洞穴裡生活。 頭上的毛髮叢中熊熊燃燒著， 溫度高達３００度。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つるのムチ",
				'zh-tw': "呼朋引伴",
			},
			damage: 50,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 720939,
				tcgplayer: 587817,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [1],
};

export default card;
