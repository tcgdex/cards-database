import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ビーダル",
		'zh-tw': "大尾狸",
	},

	illustrator: "Amelicart",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "川を 木の幹や 泥の ダムで せき止めて 住処を 作る。 働き者として 知られている。",
		'zh-tw': "用樹幹和泥巴築起水壩，堵住河流建造住所。以勤勞而聞名。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "はたらくまえば",
				'zh-tw': "勤勞門牙",
			},
			effect: {
				ja: "自分の番に1回使える。自分の手札が5枚になるように、山札を引く。",
				'zh-tw': "在自己的回合時可使用1次。從牌庫抽卡直到自己的手牌滿5張為止。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "テールスマッシュ",
				'zh-tw': "長尾擊碎",
			},
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687762,
				tcgplayer: 571738,
			},
		},
	],

	evolveFrom: {
		ja: "ビッパ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [400],
};

export default card;
