import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "エモンガ",
		'zh-tw': "電飛鼠",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "電気を ほとばしらせながら 空を 舞うように 飛ぶ。 可愛いが やっかいなのだ。",
		'zh-tw': "會一邊放電一邊像是在空中跳舞般地飛行。 雖然可愛，但很難纏。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ほりだしもの",
				'zh-tw': "挖到寶",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "バチバチ",
				'zh-tw': "劈哩啪啦",
			},
			damage: 40,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667913,
				tcgplayer: 569969,
			},
		},
	],

	retreat: 0,
	regulationMark: "F",
	rarity: "Common",
	dexId: [587],
};

export default card;
