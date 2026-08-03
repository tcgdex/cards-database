import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロトム",
		'zh-tw': "洛托姆",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "ある 少年の 発明から ロトムを 活かした いろいろな 機械が 作られ始めたのだ。",
		'zh-tw': "某位少年的發明促使人們開始製造 各種活用洛托姆的機器。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "オーバーホール",
				'zh-tw': "翻修",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。",
				'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出6張。",
			},
		},
		{
			name: {
				ja: "マッハボルト",
				'zh-tw': "音速伏特",
			},
			damage: 80,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656277,
				tcgplayer: 570681,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577102,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [479],
};

export default card;
