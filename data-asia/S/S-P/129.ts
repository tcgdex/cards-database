import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メッソン",
		'zh-tw': "冰伊布V",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "怯えると 玉ねぎ１００個分の 催涙成分を もつ 涙を 流して もらい泣き させる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みずでっぽう",
				'zh-tw': "冰霜充能",
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
				cardmarket: 525330,
				tcgplayer: 597330,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [816],
};

export default card;
