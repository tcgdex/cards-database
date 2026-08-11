import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "レシラムV",
		'zh-tw': "萊希拉姆V",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "きらめくつばさ",
				'zh-tw': "璀璨之翼",
			},
			cost: ["Fire"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、自分のポケモン1匹につける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，附於自己的1隻寶可夢身上。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ホワイトブレイズ",
				'zh-tw': "皎白火焰",
			},
			damage: 200,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "擲1次硬幣若為反面，則在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673012,
				tcgplayer: 570778,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [643],
};

export default card;
