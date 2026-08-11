import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "マクノシタ",
		'zh-tw': "幕下力士",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "強い マクノシタを 育てるために トレーナーたちが 伝統的に 作る ナベ料理が あるという。",
		'zh-tw': "據說為了培育強大的幕下力士，訓練家們會製作一種傳統的火鍋料理。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つきたおし",
				'zh-tw': "撞倒",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ぶちかます",
				'zh-tw': "頭突",
			},
			damage: 60,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571604,
				tcgplayer: 569345,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [296],
};

export default card;
