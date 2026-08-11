import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "かがやくフーディン",
		'zh-tw': "光輝胡地",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "非常に 高い 知能を 持つ。 生まれてから 死ぬまでの できごとを すべて 覚えている という。",
		'zh-tw': "擁有非常高的智商。據說牠能記住從出生到死一輩子發生過的所有事情。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ペインスプーン",
				'zh-tw': "傷痛湯匙",
			},
			effect: {
				ja: "自分の番に1回使える。相手の場のポケモン1匹にのっているダメカンを2個まで選び、相手の別のポケモン1匹にのせ替える。",
				'zh-tw': "在自己的回合時，可使用1次。選擇最多2個對手的1隻場上寶可夢身上放置的傷害指示物，改放於對手的另1隻寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "マインドルーラー",
				'zh-tw': "意志統治者",
			},
			damage: "20×",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手の手札の枚数×20ダメージ。",
				'zh-tw': "造成對手的手牌的張數×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673028,
				tcgplayer: 570794,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Radiant Rare",
	dexId: [65],
};

export default card;
