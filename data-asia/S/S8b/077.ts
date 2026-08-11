import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミッキュVMAX",
		'zh-tw': "謎擬ＱVMAX",
	},

	illustrator: "Studio Bora Inc.",
	category: "Pokemon",
	hp: 300,
	types: ["Psychic"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "オカルトナンバー",
				'zh-tw': "靈異數字",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "ダメカン4個を、相手のポケモンに好きなようにのせる。この番、自分の手札から「アセロラの予感」を出して使っていたなら、のせるダメカンの数は13個になる。",
				'zh-tw': "將4個傷害指示物以任意方式放置於對手的寶可夢身上。在這個回合，若從自己的手牌使出了「阿塞蘿拉的預感」，則放置的傷害指示物的數量改為13個。",
			},
		},
		{
			name: {
				ja: "ダイシャドー",
				'zh-tw': "極巨暗影",
			},
			damage: 120,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
				'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586593,
				tcgplayer: 571330,
			},
		},
	],

	evolveFrom: {
		ja: "ミミッキュV",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [778],
};

export default card;
