import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "パルスワンV",
		'zh-tw': "逐電犬V",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "そうでん",
				'zh-tw': "輸電",
			},
			cost: ["Lightning"],
			effect: {
				ja: "自分の山札から[雷]エネルギーを2枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張【雷】能量卡，以任意方式附於備戰寶可夢身上。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ライトニングストーム",
				'zh-tw': "雷電風暴",
			},
			damage: "10+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[雷]エネルギーの数×30ダメージ追加。",
				'zh-tw': "增加自己的場上寶可夢身上附加的【雷】能量的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586571,
				tcgplayer: 571308,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Double rare",
	dexId: [836],
};

export default card;
