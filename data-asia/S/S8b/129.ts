import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤレユータン",
		'zh-tw': "智揮猩",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "森の 隅々まで 知り尽くし 傷ついた ポケモンが いると 薬草を 探して 治療する。",
		'zh-tw': "對森林的各個角落都瞭若指掌。如果有寶可夢受傷了，就會去尋找藥草為牠們治療。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "さるぢえ",
				'zh-tw': "小聰明",
			},
			effect: {
				ja: "自分の番に1回使える。自分の手札を1枚選び、山札の上のカードと入れ替える。",
				'zh-tw': "在自己的回合時，可使用1次。選擇1張自己的手牌，與牌庫上方的卡互換。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "はりたおす",
				'zh-tw': "擊倒",
			},
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586645,
				tcgplayer: 571382,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "None",
	dexId: [765],
};

export default card;
