import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "イワンコ",
		'zh-tw': "岩狗狗",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "首の 岩を こすりつけてくるのは 親愛の 証。 ただし 岩は 鋭いので かなり 痛いぞ。",
		'zh-tw': "會用脖子上的岩石來摩蹭，代表彼此感情深厚。但因為岩石很銳利，所以會很痛。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かみくだく" },
			damage: 30,
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560457,
				tcgplayer: 569173,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [744],
};

export default card;
