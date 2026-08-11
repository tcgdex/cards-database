import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "アブリー",
		'zh-tw': "萌虻",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "敵が 発する オーラから つぎの 行動を 予測する。 攻撃を ひらりと かわして 反撃する。",
		'zh-tw': "從敵人散發出的氣場來判斷對方下一步的行動。能輕盈地躲開攻擊並進行反擊。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はばたく",
				'zh-tw': "羽擊",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560802,
				tcgplayer: 569262,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "Common",
	dexId: [742],
};

export default card;
