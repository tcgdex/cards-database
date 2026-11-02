import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "リザードンV",
		'zh-tw': "噴火龍V",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "やきつくす",
				'zh-tw': "燒盡",
			},
			damage: 90,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
				'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。",
			},
		},
		{
			name: {
				ja: "ヒートブラスト",
				'zh-tw': "高溫爆破",
			},
			damage: 180,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687773,
				tcgplayer: 571749,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [6],
};

export default card;
