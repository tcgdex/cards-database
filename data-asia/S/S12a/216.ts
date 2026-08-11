import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ネオラントV",
		'zh-tw': "霓虹魚V",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ルミナスサイン",
				'zh-tw': "夜光標誌",
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "アクアリターン",
				'zh-tw': "水迴旋",
			},
			damage: 120,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
				'zh-tw': "將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687778,
				tcgplayer: 571754,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [457],
};

export default card;
