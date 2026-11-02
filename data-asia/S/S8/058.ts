import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "タイレーツ",
		'zh-tw': "列陣兵",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "６匹で １匹の ポケモン。 隊列を 組み替えながら チームワークで 戦うのだ。",
		'zh-tw': "６隻為一體的寶可夢。慣於團隊行動，會一邊變換陣形一邊戰鬥。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ずつき",
				'zh-tw': "頭錘",
			},
			damage: 30,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "がけっぷちのじん",
				'zh-tw': "背水列陣",
			},
			damage: "60+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "相手のサイドの残り枚数が1枚なら、160ダメージ追加。",
				'zh-tw': "若對手剩餘獎賞卡的張數為1張，則增加160點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575613,
				tcgplayer: 569559,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [870],
};

export default card;
