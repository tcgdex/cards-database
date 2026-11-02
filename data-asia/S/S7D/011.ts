import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "プクリン",
		'zh-tw': "胖可丁",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "怒ると 思いっきり 息を 吸い込み どんどん 膨らんでいく。 なんと ２０倍に なることもある。",
		'zh-tw': "生氣時會拼命吸氣，讓自己的身體不斷膨脹。有時甚至能脹大到原來的２０倍。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "たからをみつける",
				'zh-tw': "發現寶物",
			},
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ハイパーボイス",
				'zh-tw': "巨聲",
			},
			damage: 90,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571593,
				tcgplayer: 569334,
			},
		},
	],

	evolveFrom: {
		ja: "プリン",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [40],
};

export default card;
