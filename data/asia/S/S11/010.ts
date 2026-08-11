import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "アイアント",
		'zh-tw': "鐵蟻",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "巣の 奥深くに タマゴを 産む。 クイタランに 襲われると 大きな 顎で 噛みついて 反撃。",
		'zh-tw': "在巢穴的深處產卵。受到熔蟻獸的襲擊時會用 大大的顎部咬住對方進行反擊。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "エネほり",
				'zh-tw': "挖能量",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "かみつく",
				'zh-tw': "咬住",
			},
			damage: 50,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667613,
				tcgplayer: 569941,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [632],
};

export default card;
