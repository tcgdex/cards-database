import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "セレビィVMAX",
		'zh-tw': "時拉比VMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いやしのもり" },
			effect: {
				ja: "自分の番に1回使える。自分の[草]ポケモン全員のHPを、それぞれ「20」回復する。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ダイプラント",
				'zh-tw': "極巨植物",
			},
			damage: 130,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "自分の山札からポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560705,
				tcgplayer: 569232,
			},
		},
	],

	evolveFrom: {
		ja: "セレビィV",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [251],
};

export default card;
