import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキワラシ",
		'zh-tw': "雪童子",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "寒い 土地でしか 生きられない。 マイナス １００度の 環境でも 元気に 跳ねまわっているよ。",
		'zh-tw': "只能在寒冷的土地上生存。即使在零下１００度的環境下也能充滿活力地到處蹦蹦跳跳。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ずつき",
				'zh-tw': "擊掌奇襲",
			},
			damage: 30,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560436,
				tcgplayer: 569152,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [361],
};

export default card;
