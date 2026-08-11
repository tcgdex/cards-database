import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "キテルグマ",
		'zh-tw': "穿著熊",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "仲間と 認めると 愛情を 示すために 抱きしめようとするが 骨を 砕かれるので 危険。",
		'zh-tw': "如果牠認定你是牠的夥伴， 便會試著擁抱你來表示喜愛。 但這會弄碎你的骨頭，非常危險。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "パワーチャージ",
				'zh-tw': "力量充能",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを1枚選び、このポケモンにつける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張基本能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ぶちかます",
				'zh-tw': "頭突",
			},
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773802,
				tcgplayer: 566304,
			},
		},
	],

	evolveFrom: {
		ja: "ヌイコグマ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [760],
};

export default card;
