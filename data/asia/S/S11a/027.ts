import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒンバス",
		'zh-tw': "醜醜魚",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "見た目が 悪いので 人気はないが 脅威の 生命力が あり 研究対象には なっている。",
		'zh-tw': "外表醜陋，所以不受歡迎。擁有驚人的生命力，因而成為了研究對象。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かくせい",
				'zh-tw': "覺醒",
			},
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "はねる",
				'zh-tw': "躍起",
			},
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673024,
				tcgplayer: 570790,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570878,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [349],
};

export default card;
