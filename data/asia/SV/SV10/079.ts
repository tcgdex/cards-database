import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のペルシアンex",
		'zh-tw': "<火箭隊的>貓老大ex",
		'zh-cn': "<火箭隊的>貓老大ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "こうまんしれい",
				'zh-tw': "高傲指令",
				'zh-cn': "高傲指令",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の山札を上から10枚オモテにする。のぞむなら、その中にあるポケモンが持つワザを1つ選び、このワザとして使う。オモテにしたカードは山札にもどして切る。",
				'zh-tw': "將對手的牌庫上方10張卡翻到正面。若希望，選擇1個其中的寶可夢持有的招式，作為這個招式使用。將翻到正面的卡放回牌庫並重洗。",
				'zh-cn': "將對手的牌庫上方10張卡翻到正面。若希望，選擇1個其中的寶可夢持有的招式，作為這個招式使用。將翻到正面的卡放回牌庫並重洗。",
			},
		},
		{
			name: {
				ja: "クルーエルスラッシュ",
				'zh-tw': "殘酷斬",
				'zh-cn': "殘酷斬",
			},
			damage: 140,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
				'zh-cn': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821911,
				tcgplayer: 628720,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のニャース",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [53],

	suffix: "EX",
};

export default card;
