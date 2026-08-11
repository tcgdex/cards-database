import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "いたずら好きのピチュー",
		'zh-tw': "阿勃梭魯",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		ja: "遊ぶときは いつだって 全力だ！ でも お片付けも 忘れずに！",
		'zh-tw': "如風般地奔馳在山野中。形狀如弓的角能夠敏銳 感應到自然災害的預兆。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "どたばたパーティ",
				'zh-tw': "劈開",
			},
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のポケモン全員に、それぞれ10ダメージ。ウラなら、自分のポケモン全員に、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 660428,
				tcgplayer: 597398,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [172],
};

export default card;
