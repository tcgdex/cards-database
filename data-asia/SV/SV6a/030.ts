import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "アブソル",
		'zh-tw': "阿勃梭魯",
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "風のように 野山を 駆けぬける。 弓なりの ツノは 自然災害の 予兆を 敏感に 感じとる。",
		'zh-tw': "如風般地奔馳在山野中。 形狀如弓的角能夠敏銳 感應到自然災害的預兆。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "バッドフォール",
				'zh-tw': "惡棍墜落",
			},
			damage: "20+",
			cost: ["Colorless"],
			effect: {
				ja: "自分の場に[D]エネルギーが3個以上あるなら、50ダメージ追加。",
				'zh-tw': "若自己的場上的【惡】能量有3個以上，則增加50點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773779,
				tcgplayer: 566281,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [359],
};

export default card;
