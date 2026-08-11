import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "モクロー",
		'zh-tw': "木木梟",
	},

	illustrator: "Yoshimi Miyoshi",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "飛行しながら 切れ味 鋭い 羽根を 飛ばし 近距離では 強烈な キックを 叩きこむ。",
		'zh-tw': "一邊飛行一邊射出 刀刃般銳利的羽毛， 距離近時會使出猛烈的踢擊。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "くわえる",
				'zh-tw': "叼",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
				'zh-tw': "從自己的牌庫抽出1張卡。",
			},
		},
		{
			name: {
				ja: "このは",
				'zh-tw': "樹葉",
			},
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773752,
				tcgplayer: 566254,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [722],
};

export default card;
