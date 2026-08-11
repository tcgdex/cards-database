import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ルチャブル",
		'zh-tw': "摔角鷹人",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "身軽さを 活かした 戦法で 相手の 体力を 奪ってから 華麗な 大技を 決める。",
		'zh-tw': "利用發揮輕盈體型優勢的戰法，在消耗了對手的體力之後 使用華麗的絕招分出勝負。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひきつける",
				'zh-tw': "吸引",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。",
				'zh-tw': "從自己的牌庫抽出2張卡。",
			},
		},
		{
			name: {
				ja: "アクロバット",
				'zh-tw': "雜技",
			},
			damage: "30+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ追加。",
				'zh-tw': "擲2次硬幣，增加正面出現的次數×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667937,
				tcgplayer: 569993,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [701],
};

export default card;
