import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イトマル",
		'zh-tw': "圓絲蛛",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "キバの 毒は さほど 強くないが 巣に かかって 動けない 獲物を 弱らせるには 充分。",
		'zh-tw': "牙齒的毒性並不強烈，但用來削弱那些掛在蛛網上無法動彈的獵物是綽綽有餘。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ぶらさがる",
				'zh-tw': "垂吊",
			},
			damage: 10,
			cost: ["Darkness"],
		},
		{
			name: {
				'ja-jp': "チクチクさす",
				'zh-tw': "刺刺痛痛",
			},
			damage: 20,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586613,
				tcgplayer: 571350,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578400,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "None",
	dexId: [167],
};

export default card;
