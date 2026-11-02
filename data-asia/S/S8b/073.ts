import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "デデンネ",
		'zh-tw': "咚咚鼠",
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "電気を 生みだす 力が 弱いので コンセントや ほかの 電気ポケモンから 盗むのだ。",
		'zh-tw': "由於發電的能力不強，因此會從插座或其他的電氣寶可夢那裡偷電。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "デデフラッシュ",
				'zh-tw': "咚咚閃光",
			},
			damage: "20+",
			cost: ["Psychic"],
			effect: {
				ja: "相手のサイドの残り枚数が1枚なら、60ダメージ追加し、相手のバトルポケモンをこんらんにする。",
				'zh-tw': "若對手剩餘獎賞卡的張數為1張，則增加60點傷害，並將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586589,
				tcgplayer: 571326,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578391,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [702],
};

export default card;
