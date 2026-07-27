import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤレユータンV",
		'zh-tw': "智揮猩V",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "おとりよせ",
				'zh-tw': "下訂",
			},
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札から「ポケモンのどうぐ」を2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。從自己的牌庫選擇最多2張「寶可夢道具」卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "サイコキネシス",
				'zh-tw': "精神強念",
			},
			damage: "30+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651117,
				tcgplayer: 569901,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [765],
};

export default card;
