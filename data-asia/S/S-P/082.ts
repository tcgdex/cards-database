import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル タチフサグマ",
		'zh-tw': "皮卡丘V",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "凄まじい 声量を もつ。 シャウトとともに 威嚇するさまは ブロッキングと 呼ばれている。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バッドルーラー" },
			effect: {
				ja: "自分の番に1回使える。相手は相手自身の手札を、4枚になるようにトラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ナックルインパクト",
				'zh-tw': "充電",
			},
			damage: 180,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "從自己的牌庫選擇最多2張【雷】能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 468294,
				tcgplayer: 597293,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル マッスグマ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [862],
};

export default card;
