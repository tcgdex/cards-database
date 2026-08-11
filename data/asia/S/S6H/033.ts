import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ラルトス",
		'zh-tw': "拉魯拉絲",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "赤いツノで 人や ポケモンの 温かな 気持ちを キャッチすると 全身が ほのかに 熱くなる。",
		'zh-tw': "用紅色的角感知到人和寶可夢的溫情後，全身也會變得有點暖暖的。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あやしいひかり" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560449,
				tcgplayer: 569165,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [280],
};

export default card;
