import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュゴン",
		'zh-tw': "白海獅",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "食事の 後は 砂浜で 日光浴を している。 体温を あげて 消化を よく するのだ。",
		'zh-tw': "進食之後會在沙灘上做日光浴，藉此提高體溫 來幫助消化。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "きままにおよぐ",
				'zh-tw': "隨興游水",
			},
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
				'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			},
		},
		{
			name: {
				ja: "ひょうかいリターン",
				'zh-tw': "冰塊迴旋",
			},
			damage: "40×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[W]エネルギーを好きなだけ山札にもどし、その枚数×40ダメージ。その場合、山札を切る。",
				'zh-tw': "將自己的場上寶可夢身上附加的任意數量的【水】能量卡放回牌庫，造成其張數×40點傷害。這個情況下，重洗牌庫。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667896,
				tcgplayer: 569952,
			},
		},
	],

	evolveFrom: {
		ja: "パウワウ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [87],
};

export default card;
