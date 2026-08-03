import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ホルビー",
		'zh-tw': "掘掘兔",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "危険に 敏感。 アーマーガアの 羽音を 聴きとると あっという間に 穴を 掘って 地面に 潜る。",
		'zh-tw': "對危險很敏感。只要聽到鋼鎧鴉拍打翅膀的聲音，就會馬上挖洞鑽進地下藏身。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ともだちをさがす",
				'zh-tw': "尋找朋友",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "とっしん",
				'zh-tw': "猛撞",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575638,
				tcgplayer: 569584,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [659],
};

export default card;
