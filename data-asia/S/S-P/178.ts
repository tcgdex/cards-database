import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "シママ",
		'zh-tw': "章魚桶",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "放電すると たてがみが 光る。 たてがみが 輝く 回数や リズムで 仲間と 会話している。",
		'zh-tw': "有著堅硬結實的腦袋。會用帶有吸盤的腳纏住對手， 然後不停地用頭猛撞。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "サンダーアロー",
				'zh-tw': "攀瀑",
			},
			cost: ["Lightning"],
			effect: {
				ja: "相手のポケモン1匹に、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 570874,
				tcgplayer: 597376,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [522],
};

export default card;
