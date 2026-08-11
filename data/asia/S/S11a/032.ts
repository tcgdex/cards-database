import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "タマタマ",
		'zh-tw': "蛋蛋",
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "タマゴのように 見えるが 立派な ポケモン。 テレパシーで 仲間と 交信している らしいぞ。",
		'zh-tw': "雖然看起來很像是蛋，但卻是如假包換的寶可夢。似乎會用心靈感應來與夥伴們交流喔。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ねんりき",
				'zh-tw': "念力",
			},
			damage: 20,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673029,
				tcgplayer: 570795,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570882,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [102],
};

export default card;
