import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "タイレーツ",
		'zh-tw': "列陣兵",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "６匹で １匹の ポケモン。 隊列を 組み替えながら チームワークで 戦うのだ。",
		'zh-tw': "６隻為一體的寶可夢。慣於團隊行動，會一邊 變換陣形一邊戰鬥。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "れんげきのじん",
				'zh-tw': "連擊之陣",
			},
			damage: "20×",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "自分の場の「れんげき」のポケモンの数×20ダメージ。",
				'zh-tw': "造成自己的場上「連擊」寶可夢的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586605,
				tcgplayer: 571342,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578398,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [870],
};

export default card;
