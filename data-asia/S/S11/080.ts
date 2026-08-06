import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ギラティナV",
		'zh-tw': "騎拉帝納V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "アビスシーク",
				'zh-tw': "深淵探求",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を上から4枚見て、その中からカードを2枚選び、手札に加える。残りのカードはロストゾーンに置く。",
				'zh-tw': "查看自己的牌庫上方4張卡，從其中選擇2張卡加入手牌。將剩餘卡放置於放逐區。",
			},
		},
		{
			name: {
				ja: "ひきさく",
				'zh-tw': "撕裂",
			},
			damage: 160,
			cost: ["Grass", "Psychic", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
				'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667955,
				tcgplayer: 570011,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [487],
};

export default card;
