import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ビリジオン",
		'zh-tw': "畢力吉翁",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "素早い 身のこなしで 相手を 翻弄して ポケモンを 守ると 伝説で 伝えられている。",
		'zh-tw': "傳說中，牠會以輕快的動作戲弄對手，並保護寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "すくいだす",
				'zh-tw': "救出",
			},
			cost: ["Grass"],
			effect: {
				ja: "自分のトラッシュからポケモンを2枚まで選び、相手に見せて、手札に加える。",
				'zh-tw': "從自己的棄牌區選擇最多2張寶可夢卡，在給對手看過後加入手牌。",
			},
		},
		{
			name: {
				ja: "ソーラービーム",
				'zh-tw': "日光束",
			},
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575559,
				tcgplayer: 569510,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [640],
};

export default card;
