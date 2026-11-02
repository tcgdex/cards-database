import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "パンプジン",
		'zh-tw': "南瓜怪人",
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "新月の 夜 玄関の ドアを パンプジンが ノックする。 開けた 人を あの世へ 連れて行くのだ。",
		'zh-tw': "南瓜怪人會在朔月的夜裡去別人家門口敲門。開了門的人會被牠帶往另一個世界。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ひゃっきやこう",
				'zh-tw': "百鬼夜行",
			},
			damage: "60×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を上から6枚オモテにする。その中にある[超]ポケモンの数×60ダメージ。オモテにした[超]ポケモンは山札にもどして切る。残りのカードはトラッシュする。",
				'zh-tw': "將自己的牌庫上方6張卡翻到正面。造成其中的【超】寶可夢的數量×60點傷害。將翻到正面的【超】寶可夢放回牌庫並重洗。將剩餘卡丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571599,
				tcgplayer: 569340,
			},
		},
	],

	evolveFrom: {
		ja: "バケッチャ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [711],
};

export default card;
