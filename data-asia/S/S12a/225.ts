import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ザシアンV",
		'zh-tw': "蒼響V",
	},

	illustrator: "Hataya",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "けんのほうこう",
				'zh-tw': "劍之咆哮",
			},
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。自分の山札から[P]エネルギーを1枚選び、自分のポケモンにつける。そして山札を切る。",
				'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。從自己的牌庫選擇1張【超】能量卡，附於自己的寶可夢身上。並且重洗牌庫。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ストームスラッシュ",
				'zh-tw': "風暴斬",
			},
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[P]エネルギーの数×30ダメージ追加。",
				'zh-tw': "增加這隻寶可夢身上附加的【超】能量的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687787,
				tcgplayer: 571763,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Special illustration rare",
	dexId: [888],
};

export default card;
