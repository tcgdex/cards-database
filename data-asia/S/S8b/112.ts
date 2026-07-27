import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーミラー",
		'zh-tw': "銅鏡怪",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "磨けば 光り 真実を 映しだすとも いわれるが ドーミラーは とても 嫌がる。",
		'zh-tw': "雖然人們說把銅鏡怪打磨到發光，牠就能映照出真相，但其實牠非常討厭被打磨。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 30,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586628,
				tcgplayer: 571365,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578406,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [436],
};

export default card;
