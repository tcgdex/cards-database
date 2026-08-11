import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンヤンマ",
		'zh-tw': "蜻蜻蜓",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "高速で 羽を 羽ばたかせると 衝撃波が 発生して まわりの 窓ガラスが 割れていく。",
		'zh-tw': "如果高速拍動翅膀，就會產生衝擊波，把周圍的玻璃一一震碎。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "おうだんひこう",
				'zh-tw': "橫斷飛行",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的所有寶可夢各受到10點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: {
				ja: "カッターウインド",
				'zh-tw': "利刃之風",
			},
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 672999,
				tcgplayer: 570765,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570859,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [193],
};

export default card;
