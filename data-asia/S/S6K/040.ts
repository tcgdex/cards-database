import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "マケンカニ",
		'zh-tw': "好勝蟹",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "ヤシの木と 間違えて ナッシーに 登ることもある。 怒りを かって 振り落とされて 踏みつけられる。",
		'zh-tw': "有時會錯把椰蛋樹當成椰子樹而爬上去。惹怒椰蛋樹的牠會被甩下來並遭到踩踏。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なぐる",
				'zh-tw': "打擊",
			},
			damage: 20,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "ダブルラリアット",
				'zh-tw': "雙重金勾臂",
			},
			damage: "40×",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×40ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×40點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560814,
				tcgplayer: 569268,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [739],
};

export default card;
