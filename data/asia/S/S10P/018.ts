import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ラブカス",
		'zh-tw': "愛心魚",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "暖かい 海の サンゴ礁が 棲み処。 サニーゴの枝の 間で 眠るのが 特に お気に入り。",
		'zh-tw': "溫暖海域的珊瑚礁是 牠的棲息地。最喜歡在 太陽珊瑚的枝條間睡覺。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ペアルック",
				'zh-tw': "情侶裝",
			},
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのプレイヤーは、それぞれの山札からカードを2枚、オモテを見せ合いながら引く。",
				'zh-tw': "雙方玩家一邊從各自的牌庫抽出2張卡，一邊互看正面。",
			},
		},
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651077,
				tcgplayer: 569861,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [370],
};

export default card;
