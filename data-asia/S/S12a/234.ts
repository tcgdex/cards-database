import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ゾロアークVSTAR",
		'zh-tw': "洗翠 索羅亞克VSTAR",
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ファントムスター",
				'zh-tw': "幻影星星",
			},
			effect: {
				ja: "自分の番に使える。自分の手札をすべてトラッシュし、山札を7枚引く。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "在自己的回合時可使用。將自己的手牌全部丟棄，從牌庫抽出7張卡。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "のろいをきざむ",
				'zh-tw': "牢記詛咒",
			},
			damage: "50×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場のダメカンがのっているポケモンの数×50ダメージ。",
				'zh-tw': "造成自己的場上身上放置有傷害指示物的寶可夢的數量×50點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687796,
				tcgplayer: 571772,
			},
		},
	],

	evolveFrom: {
		ja: "ヒスイ ゾロアークV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [571],
};

export default card;
