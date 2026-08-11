import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルオー",
		'zh-tw': "吼鯨王",
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	description: {
		ja: "大きな 体を 波の上で ジャンプさせ 衝撃を 生みだし 相手を 気絶 させることがある。",
		'zh-tw': "有時會讓大大的身體在波浪上跳躍，藉此製造出衝擊讓對手昏迷。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "バブルドレイン",
				'zh-tw': "泡沫吸取",
			},
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
			},
		},
		{
			name: {
				ja: "ヘビーインパクト",
				'zh-tw': "重磅衝擊",
			},
			damage: 180,
			cost: ["Water", "Water", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673023,
				tcgplayer: 570789,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570877,
			},
		},
	],

	evolveFrom: {
		ja: "ホエルコ",
	},

	retreat: 4,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [321],
};

export default card;
