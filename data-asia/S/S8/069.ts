import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクトV",
		'zh-tw': "蓋諾賽克特V",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "フュージョンシステム",
				'zh-tw': "匯流系統",
			},
			effect: {
				ja: "自分の番に1回使える。自分の手札の枚数が、自分の場の「フュージョン」のポケモンの数と同じ枚数になるように、山札を引く。",
				'zh-tw': "在自己的回合時，可使用1次。從牌庫抽卡直到自己的手牌的張數與自己的場上「匯流」寶可夢的數量相同為止。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "テクノバスター",
				'zh-tw': "高科技光炮",
			},
			damage: 210,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575624,
				tcgplayer: 569570,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [649],
};

export default card;
