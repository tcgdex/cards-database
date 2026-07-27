import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ニャイキングV",
		'zh-tw': "伽勒爾 喵頭目V",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "じょうきげん",
				'zh-tw': "好心情",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を3枚引く。",
				'zh-tw': "從自己的牌庫抽出3張卡。",
			},
		},
		{
			name: {
				ja: "おたからラッシュ",
				'zh-tw': "寶物猛攻",
			},
			damage: "20×",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "自分の手札の枚数×20ダメージ。",
				'zh-tw': "造成自己的手牌的張數×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667954,
				tcgplayer: 570010,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [863],
};

export default card;
