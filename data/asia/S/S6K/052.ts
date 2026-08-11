import { Card } from "models/database/card";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハピナスV",
		'zh-tw': "幸福蛋V",
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しぜんかいふく" },
			effect: {
				'ja-jp': "自分の手札からこのポケモンにエネルギーをつけるたび、このポケモンの特殊状態をすべて回復する。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ハッピーボンバー",
				'zh-tw': "幸福轟炸",
			},
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーの数×30ダメージ追加。のぞむなら、ダメージを与えたあとに、トラッシュからエネルギーを3枚まで選び、このポケモンにつける。",
				'zh-tw': "增加這隻寶可夢身上附加的能量的數量×30點傷害。若希望，在造成傷害後，從棄牌區選擇最多3張能量卡，附於這隻寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560840,
				tcgplayer: 569280,
			},
		},
	],

	retreat: 4,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [242],
};

export default card;
