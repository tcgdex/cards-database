import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラパルトex",
		'zh-tw': "多龍巴魯托ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ジェットヘッド",
				'zh-tw': "噴射頭擊",
			},
			damage: 70,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ファントムダイブ",
				'zh-tw': "幻影奇襲",
			},
			damage: 200,
			cost: ["Fire", "Psychic"],
			effect: {
				ja: "ダメカン6個を、相手のベンチポケモンに好きなようにのせる。",
				'zh-tw': "將6個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767554,
				tcgplayer: 568110,
			},
		},
	],

	evolveFrom: {
		ja: "ドロンチ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [887],

	suffix: "EX",
};

export default card;
