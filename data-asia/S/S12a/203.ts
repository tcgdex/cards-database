import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨマワル",
		'zh-tw': "夜巡靈",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "いいつけを 守らない 子供を 見つけると 夜中に どこかへ 連れていくと いわれている。",
		'zh-tw': "據說一旦發現不聽話的孩子，牠就會在深夜裡把那個孩子帶去某個不知名的地方。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "まどわす",
				'zh-tw': "蠱惑",
			},
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687764,
				tcgplayer: 571741,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [355],
};

export default card;
