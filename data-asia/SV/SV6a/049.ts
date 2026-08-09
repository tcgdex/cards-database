import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ペルシアン",
		'zh-tw': "貓老大",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "気性が 激しく 尻尾を まっすぐ 立てたら 要注意。 とびかかって 噛みつく 前触れだ。",
		'zh-tw': "性情凶暴，豎起尾巴時 要多加小心。那是牠將 飛撲過來咬你的前兆。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "みだれひっかき",
				'zh-tw': "亂抓",
			},
			damage: "50×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数×50ダメージ。",
				'zh-tw': "擲3次硬幣，造成正面出現的次數×50點傷害。",
			},
		},
		{
			name: {
				ja: "スラッシュクロー",
				'zh-tw': "利爪揮砍",
			},
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773798,
				tcgplayer: 566300,
			},
		},
	],

	evolveFrom: {
		ja: "ニャース",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [53],
};

export default card;
