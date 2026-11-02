import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ギラティナVSTAR",
		'zh-tw': "騎拉帝納VSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "ロストインパクト",
				'zh-tw': "放逐衝擊",
			},
			damage: 280,
			cost: ["Grass", "Psychic", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについているエネルギーを2個選び、ロストゾーンに置く。",
				'zh-tw': "選擇2個自己的場上寶可夢身上附加的能量，放置於放逐區。",
			},
		},
		{
			name: {
				ja: "スターレクイエム",
				'zh-tw': "[VSTAR力量]星星安魂曲",
			},
			cost: ["Grass", "Psychic"],
			effect: {
				ja: "このワザは、自分のロストゾーンにカードが10枚以上あるときにしか使えない。相手のバトルポケモンをきぜつさせる。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "這個招式只有在自己的放逐區有10張以上的卡時才可使用。將對手的戰鬥寶可夢【氣絕】。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667956,
				tcgplayer: 570012,
			},
		},
	],

	evolveFrom: {
		ja: "ギラティナV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [487],
};

export default card;
