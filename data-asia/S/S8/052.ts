import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "イシツブテ",
		'zh-tw': "小拳石",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "両手を 使い 険しい 崖を 登る。 その姿を 見た 人が ボルダリングを 始めたらしい。",
		'zh-tw': "會用雙手攀登險峻的山崖。人們似乎是在目睹牠那姿態之後才開始了抱石攀岩運動。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ころがる",
				'zh-tw': "滾動",
			},
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "なぐる",
				'zh-tw': "打擊",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575607,
				tcgplayer: 569553,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [74],
};

export default card;
