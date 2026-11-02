import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ザシアンV",
		'zh-tw': "蒼響V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ふとうのつるぎ",
				'zh-tw': "不撓之劍",
			},
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。自分の山札を上から3枚見て、その中から[鋼]エネルギーを好きなだけ選び、このポケモンにつける。残りのカードは手札に加える。",
				'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。查看自己的牌庫上方3張卡，選擇其中任意數量的【鋼】能量卡，附於這隻寶可夢身上。將剩餘卡加入手牌。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ブレイブキャリバー",
				'zh-tw': "無畏聖劍",
			},
			damage: 230,
			cost: ["Metal", "Metal", "Metal"],
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
				cardmarket: 586633,
				tcgplayer: 571370,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Double rare",
	dexId: [888],
};

export default card;
