import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "イワンコ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "首の 岩を こすりつけてくるのは 親愛の 証。 ただし 岩は 鋭いので かなり 痛いぞ。",
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
			type: "holo",
			thirdParty: {
				cardmarket: 587084,
				tcgplayer: 571454,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [744],
};

export default card;
