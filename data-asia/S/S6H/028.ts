import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "はくばバドレックスVMAX",
		'zh-tw': "白馬蕾冠王VMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "エンペラーライド",
				'zh-tw': "順風抽出",
			},
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数×30ダメージ追加。",
				'zh-tw': "從自己的牌庫抽出1張卡。若在後攻玩家的最初回合使用，則再抽出3張卡。",
			},
		},
		{
			name: {
				ja: "ダイランス",
				'zh-tw': "偷襲",
			},
			damage: "10+",
			cost: ["Water", "Water"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを2枚まで選び、トラッシュする。その場合、トラッシュした枚数×120ダメージ追加。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560444,
				tcgplayer: 569160,
			},
		},
	],

	evolveFrom: {
		ja: "はくばバドレックスV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [898],
};

export default card;
