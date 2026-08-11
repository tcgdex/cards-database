import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メッソン",
		'zh-tw': "敲音猴",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "怯えると 玉ねぎ１００個分の 催涙成分を もつ 涙を 流して もらい泣き させる。",
		'zh-tw': "當牠用特別的木棒敲奏時，能夠給予花草活力的力量就會變成音波擴散開來。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みずでっぽう",
				'zh-tw': "直奔",
			},
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525340,
				tcgplayer: 597332,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [816],
};

export default card;
